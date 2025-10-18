export default function PromptPage() {
    return(
        <div className="flex flex-1 flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.from({length: 4}).map((_, index) => (
                    <div key={index.toString()} className="md:last:odd:col-span-2">

                    </div>
                ))}
            </div>
        </div>
    )
}