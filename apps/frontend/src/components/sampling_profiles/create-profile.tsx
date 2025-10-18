import {Label} from "@/components/ui/label";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {IconInfoCircle} from "@tabler/icons-react";
import {Slider} from "@/components/ui/slider";
import {Separator} from "@/components/ui/separator";

export function CreateProfile(){
    return(
        <div className="flex flex-col py-2 border border-muted-foreground/20 rounded-md">
            <div className="flex min-w-full p-2 flex-col md:flex-row md:items-center gap-2">
                <div className="flex flex-1 flex-row md:items-center gap-1">
                    <Label className="text-sm">Temperature</Label>
                    <Tooltip>
                        <TooltipTrigger>
                            <IconInfoCircle className="text-muted-foreground"/>
                        </TooltipTrigger>
                        <TooltipContent>
                            Higher values make responses more imaginative. Lower values make them more focused and predictable.
                        </TooltipContent>
                    </Tooltip>
                </div>
                <div className="flex flex-1 flex-row gap-2 items-center border border-muted-foreground/20 rounded-md p-2">
                    <span className="text-xs">0.0</span>
                    <Slider defaultValue={[0]} max={1} min={0} step={0.1} />
                </div>
            </div>
            <Separator/>
        </div>
    )
}