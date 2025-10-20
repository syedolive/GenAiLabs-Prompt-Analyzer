import {
  OnQueueEvent,
  QueueEventsHost,
  QueueEventsListener as NestQueueEventsListener,
} from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Subject } from 'rxjs';
import type { QueueEventsListener as BullEventListener } from 'bullmq';

type SelectedListeners = Pick<
  BullEventListener,
  'active' | 'progress' | 'completed' | 'failed'
>;

type EventKind = 'chunk' | 'done' | 'failed' | 'completed' | 'active';
type EventPayload = {
  kind: EventKind;
  jobId: string;
  data?: string;
  reason?: string;
  returnValue?: any;
};

@NestQueueEventsListener('inference')
export class InferenceQueueEvents
  extends QueueEventsHost
  implements SelectedListeners
{
  private logger = new Logger(InferenceQueueEvents.name);
  private channels = new Map<string, Subject<EventPayload>>();

  constructor() {
    super();
    console.log('Events instance', this);
  }

  getChannel(jobId: string) {
    let channel = this.channels.get(jobId);
    if (!channel) {
      channel = new Subject<EventPayload>();
      this.channels.set(jobId, channel);
    }
    return channel;
  }

  closeChannel(jobId: string) {
    const channel = this.channels.get(jobId);
    if (channel) {
      channel.complete();
      this.channels.delete(jobId);
    }
  }

  @OnQueueEvent('active')
  active({ jobId }) {
    this.logger.debug(`EVENT TRIGGER: Job ${jobId} is active`);
    const channel = this.channels.get(String(jobId));
    if (!channel) {
      this.channels.set(String(jobId), new Subject<EventPayload>());
    }
  }

  @OnQueueEvent('progress')
  progress({ data, jobId }) {
    const channel = this.getChannel(String(jobId));
    this.logger.debug(`EVENT TRIGGER: Job ${jobId} progress: ${data}`);
    if (channel) {
      channel.next({
        kind: 'chunk',
        jobId: String(jobId),
        data: data as string,
      });
    }
  }

  @OnQueueEvent('completed')
  completed(args: { jobId: string; returnvalue: string; prev?: string }) {
    const channel = this.getChannel(String(args.jobId));
    if (channel) {
      channel.next({
        kind: 'completed',
        jobId: String(args.jobId),
        returnValue: args.returnvalue,
      });
      channel.complete();
      this.channels.delete(String(args.jobId));
    }
  }

  @OnQueueEvent('failed')
  failed(args: { jobId: string; failedReason: string; prev?: string }) {
    const channel = this.getChannel(String(args.jobId));
    if (channel) {
      channel.next({
        kind: 'failed',
        jobId: String(args.jobId),
        reason: args.failedReason,
      });
      channel.complete();
      this.channels.delete(String(args.jobId));
    }
  }
}
