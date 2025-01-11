export default function VerticalScrollParagraph({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative w-full h-[calc(100vh-80px)]  overflow-x-visible   overflow-y-hidden rounded-lg  px-5   bg-zinc-100 dark:bg-zinc-900">
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-zinc-50 dark:from-zinc-950 to-transparent z-10"></div>{" "}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-zinc-50 dark:from-zinc-950 to-transparent z-10"></div>
            <div className=" z-50 !leading-extra-loose -tracking-normal md:text-3xl text-xl text-justify  w-full h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide pb-8 py-12">
                {children}

            </div>
        </div>
    )
}