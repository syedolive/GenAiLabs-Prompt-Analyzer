import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button";
import {IconReload} from "@tabler/icons-react";




export default function PromptLayout({children}: { children: React.ReactNode}) {
    return(
        <div className="container mx-auto flex flex-1 flex-col py-4 px-2 relative gap-4">
            <Card className="border-none shadow-none">
                <CardHeader>
                    <CardDescription className="text-sm">As a restaurant owner, I want to manage my menu items through an admin dashboard so that I can easily update prices, descriptions, and availability without relying on developers. This will allow me to quickly respond to changes in inventory or seasonal offers and ensure my customers always see accurate information online. Example prompt for the sheet:
                        The restaurant admin module should enable owners to create, edit, and delete menu items, organize them into categories, and toggle visibility for out-of-stock dishes. The dashboard should include validation for required fields, image uploads for menu items, and a confirmation dialog before deletion.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="secondary" size="sm" className="rounded-full text-xs">Default Profile</Button>
                </CardContent>
                <CardFooter className="flex flex-row items-center justify-end gap-2">
                    <Button variant="secondary" size="icon-sm" className="rounded-full text-xs">
                        <IconReload/>
                    </Button>
                    <Button variant="secondary" size="sm" className="rounded-full text-xs">
                        <span>Edit Prompt</span>
                    </Button>
                </CardFooter>
            </Card>
            {children}
        </div>
    )
}