export default function VerticalScrollParagraph({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative w-full h-[calc(100vh-80px)]    overflow-hidden rounded-lg  px-5   bg-stone-100 dark:bg-stone-900">
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-stone-50 dark:from-stone-950 to-transparent z-10"></div>{" "}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-stone-50 dark:from-stone-950 to-transparent z-10"></div>
            <p className="relative !leading-extra-loose -tracking-normal md:text-3xl text-xl text-justify  w-full h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide py-8">
                {children}

            </p>
        </div>
    )
}