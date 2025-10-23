export const INFERENCE_COMPLETED = 'inference.completed';
export class InferenceCompletedEvent {
  constructor(
    public prompt: string,
    public jobId: string,
    public result: string,
  ) {}
}
