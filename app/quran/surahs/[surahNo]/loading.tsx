import PageHeader from "./components/page-header";
import VerticalScrollParagraph from "./components/vertical-scroll-paragraph";

export default function Loading() {
    return (
        <div className="flex flex-col w-full h-full max-w-screen-sm max-h-screen mx-auto bg-stone-50 dark:bg-stone-950 text-stone-700 dark:text-stone-300 py-2">
            <PageHeader />

            <VerticalScrollParagraph>
                {Array(15).fill("").map((_, i) => (
                    <span className=" h-6 inline-block w-full bg-stone-300 dark:bg-stone-800 rounded mb-2 animate-pulse" key={i + 1}></span>
                ))}
            </VerticalScrollParagraph>
        </div>
    );
}
