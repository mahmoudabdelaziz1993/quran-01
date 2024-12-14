import PageHeader from "@/app/components/page-header";
import VerticalScrollParagraph from "@/app/components/vertical-scroll-paragraph";



export default function Loading() {
    return (
        <div className="flex flex-col w-full h-full max-w-screen-xl max-h-screen mx-auto bg-zinc-50 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 py-2">
            <PageHeader />

            <VerticalScrollParagraph>
                {Array(15).fill("").map((_, i) => (
                    <span className=" h-6 inline-block w-full bg-zinc-300 dark:bg-zinc-800 rounded mb-2 animate-pulse" key={i + 1}></span>
                ))}
            </VerticalScrollParagraph>
        </div>
    );
}
