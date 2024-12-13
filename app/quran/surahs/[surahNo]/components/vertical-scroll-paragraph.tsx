export default function VerticalScrollParagraph({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative w-full h-full flex-1   overflow-hidden rounded-lg  px-5 py-4 mt-2 bg-stone-200 dark:bg-stone-900">
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-stone-50/80 dark:from-stone-950/80 to-transparent z-10"></div>{" "}
            <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-stone-50/80 dark:from-stone-950/80 to-transparent z-10"></div>
            <p className="relative  !leading-relaxed !tracking-normal text-lg md:text-3xl text-justify  inline-block  w-full h-full  min-h-[50vh] md:max-h-[80vh] max-h-[85vh] overflow-y-auto scrollbar-hide pt-2">
                {children}

            </p>
        </div>
    )
}