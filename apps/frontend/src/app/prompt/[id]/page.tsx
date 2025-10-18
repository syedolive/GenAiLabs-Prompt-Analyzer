import {Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {ScrollArea} from "@/components/ui/scroll-area";
import {IconReload} from "@tabler/icons-react";
import {Button} from "@/components/ui/button";

export default function PromptPage() {
    return(
        <div className="flex flex-1 flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.from({length: 3}).map((_, index) => (
                    <div key={index.toString()} className="md:last:odd:col-span-2">
                        <Card className="border-none shadow-none py-4">
                            <CardHeader className="border-b !py-2">
                                <CardTitle className="text-sm">Response: Profile Name</CardTitle>
                                <CardDescription className="flex flex-row flex-wrap gap-2">
                                    <Badge variant="outline" className="rounded-full py-1">Temperature: 0.8</Badge>
                                    <Badge variant="outline" className="rounded-full py-1">Temperature: 0.8</Badge>
                                    <Badge variant="outline" className="rounded-full py-1">Temperature: 0.8</Badge>
                                    <Badge variant="outline" className="rounded-full py-1">Temperature: 0.8</Badge>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ScrollArea className="text-sm h-[200px]">
                                    We will deliver an admin dashboard that lets restaurant owners create, edit, delete, reorder, and categorize menu items with real-time visibility toggles for out-of-stock dishes. Forms will validate required fields (name, price, category, availability), enforce price formats, and support image upload with preview, size limits, and replace flow. Destructive actions will use a confirmation dialog that names the item and explains impact. Successful saves show toasts; errors surface inline and are logged. All changes write to an audit log capturing editor, timestamp, and fields changed, and updates will reflect on the public menu immediately after save.

                                    The UI will include clear empty and loading states, keyboard-friendly navigation, and screen-reader labels. We’ll expose secure endpoints for items and categories, apply optimistic updates where safe, and guard against duplicate names per category and zero-price mistakes with guided confirmations. Performance targets include snappy list interactions on large catalogs and responsive image handling. Assumes existing authentication and public menu integration endpoints are available; otherwise, we’ll stub them behind feature flags.
                                    We will deliver an admin dashboard that lets restaurant owners create, edit, delete, reorder, and categorize menu items with real-time visibility toggles for out-of-stock dishes. Forms will validate required fields (name, price, category, availability), enforce price formats, and support image upload with preview, size limits, and replace flow. Destructive actions will use a confirmation dialog that names the item and explains impact. Successful saves show toasts; errors surface inline and are logged. All changes write to an audit log capturing editor, timestamp, and fields changed, and updates will reflect on the public menu immediately after save.

                                    The UI will include clear empty and loading states, keyboard-friendly navigation, and screen-reader labels. We’ll expose secure endpoints for items and categories, apply optimistic updates where safe, and guard against duplicate names per category and zero-price mistakes with guided confirmations. Performance targets include snappy list interactions on large catalogs and responsive image handling. Assumes existing authentication and public menu integration endpoints are available; otherwise, we’ll stub them behind feature flags.
                                    We will deliver an admin dashboard that lets restaurant owners create, edit, delete, reorder, and categorize menu items with real-time visibility toggles for out-of-stock dishes. Forms will validate required fields (name, price, category, availability), enforce price formats, and support image upload with preview, size limits, and replace flow. Destructive actions will use a confirmation dialog that names the item and explains impact. Successful saves show toasts; errors surface inline and are logged. All changes write to an audit log capturing editor, timestamp, and fields changed, and updates will reflect on the public menu immediately after save.

                                    The UI will include clear empty and loading states, keyboard-friendly navigation, and screen-reader labels. We’ll expose secure endpoints for items and categories, apply optimistic updates where safe, and guard against duplicate names per category and zero-price mistakes with guided confirmations. Performance targets include snappy list interactions on large catalogs and responsive image handling. Assumes existing authentication and public menu integration endpoints are available; otherwise, we’ll stub them behind feature flags.
                                </ScrollArea>
                            </CardContent>
                            <CardFooter className="flex items-center justify-end">
                                <Button variant="secondary" size="icon-sm" className="rounded-full text-xs">
                                    <IconReload/>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    )
}