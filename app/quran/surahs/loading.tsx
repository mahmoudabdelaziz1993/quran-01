import PageHeader from "@/app/components/page-header";
import VerticalScrollParagraph from "@/app/components/vertical-scroll-paragraph";




export default function Loading() {
    return (
        <div className="flex flex-col w-full h-full max-w-screen-xl max-h-screen mx-auto bg-zinc-50 dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 py-2">
            <PageHeader />

            <VerticalScrollParagraph>
                {Array(15).fill("").map((_, i) => (
                    <a href="!#" className="flex gap-5 w-full py-4 px-5 mt-5" key={"skelton" + i + 1}>
                        <span className="w-12 h-12 rounded-full inline-block  bg-zinc-300 dark:bg-zinc-800  mb-2 animate-pulse" ></span>

                        <span className="w-40 h-12 inline-block  bg-zinc-300 dark:bg-zinc-800 rounded mb-2 animate-pulse" ></span>

                    </a>
                ))}
            </VerticalScrollParagraph>
        </div>
    );
}
