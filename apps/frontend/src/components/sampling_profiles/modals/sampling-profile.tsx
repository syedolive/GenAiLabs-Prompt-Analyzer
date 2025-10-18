import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {CreateProfile} from "@/components/sampling_profiles/create-profile";

export default function SamplingProfile({children}: { children: React.ReactNode}) {
    return(
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="min-w-full md:min-w-[50dvw]">
                <DialogHeader>
                    <DialogTitle>Create Sampling Profile</DialogTitle>
                    <DialogDescription>
                        Define how the model should respond. From creative and open-ended to focused and concise.
                    </DialogDescription>
                </DialogHeader>
                <CreateProfile/>
            </DialogContent>
        </Dialog>
    )
}