import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import {IconReload} from "@tabler/icons-react";
import {Badge} from "@/components/ui/badge";
import {Spinner} from "@/components/ui/spinner";




export default function PromptLayout({children}: { children: React.ReactNode}) {
    return(
        <div className="container mx-auto flex flex-1 flex-col px-2 relative py-4 gap-4">
            <Card className="border-none shadow-none">
                <CardHeader>
                    <CardDescription className="text-sm">As a restaurant owner, I want to manage my menu items through an admin dashboard so that I can easily update prices, descriptions, and availability without relying on developers. This will allow me to quickly respond to changes in inventory or seasonal offers and ensure my customers always see accurate information online. Example prompt for the sheet:
                        The restaurant admin module should enable owners to create, edit, and delete menu items, organize them into categories, and toggle visibility for out-of-stock dishes. The dashboard should include validation for required fields, image uploads for menu items, and a confirmation dialog before deletion.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Badge variant="secondary" className="rounded-full py-2">Default Profile</Badge>
                </CardContent>
                <CardFooter className="flex flex-row items-center justify-between gap-2">
                    <Badge variant="outline" className="rounded-full py-2">Gemini: 1.5pro</Badge>
                    <div className="flex gap-2 items-center">
                        <Button variant="secondary" size="icon-sm" className="rounded-full text-xs">
                            <IconReload/>
                        </Button>
                        <Button variant="secondary" size="sm" className="rounded-full text-xs">
                            <span>Edit Prompt</span>
                        </Button>
                    </div>
                </CardFooter>
            </Card>
            <div className="pb-11">
                {children}
            </div>
            <div className="fixed bottom-3 right-3">
                <Button variant="secondary" size="lg" className="rounded-full" disabled={true}>
                    <div className="flex flex-row items-center gap-2">
                        <Spinner/>
                        Waiting for prompts to load...
                    </div>
                </Button>
            </div>
        </div>
    )
}