import Link from "next/link";

export default function Loading() {
    return (
        <div className="flex flex-col w-full h-full max-w-screen-sm max-h-svh mx-auto bg-stone-50 dark:bg-stone-950 text-stone-700 dark:text-stone-300 py-2">
            <header className="relative flex">
                <h1 className="!leading-relaxed !tracking-normal text-center grid place-items-center p-4 flex-1 text-5xl font-semibold">
                    <span className="w-40 h-6 bg-stone-300 dark:bg-stone-800 rounded mb-2 animate-pulse"></span>
                </h1>
                {/* Back Button */}
                <Link
                    className="grid place-items-center outline-none border-none size-12 rounded-full p-3 absolute top-1/4 dark:hover:bg-stone-800 hover:bg-stone-200 focus:outline-none focus:ring active:bg-stone-800"
                    href="/quran/surahs"
                >
                    <span className="sr-only">Back</span>
                    <span className="size-6 bg-stone-300 dark:bg-stone-800 rounded mb-2 animate-pulse"></span>

                </Link>
            </header>
            <div className="relative w-full h-full flex-1 overflow-hidden rounded-lg px-5 py-4 mt-2 bg-stone-200 dark:bg-stone-900">
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-stone-50/80 dark:from-stone-950/80 to-transparent z-10"></div>
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-stone-50/80 dark:from-stone-950/80 to-transparent z-10"></div>
                <p className="relative !leading-relaxed !tracking-normal text-lg md:text-3xl text-justify inline-block w-full h-full min-h-[50vh] md:max-h-[80vh] max-h-[85vh] overflow-y-auto scrollbar-hide pt-2">
                    {Array(15).fill("").map((_, i) => (
                        <span className=" h-6 inline-block w-full bg-stone-300 dark:bg-stone-800 rounded mb-2 animate-pulse" key={i + 1}></span>
                    ))}
                </p>
            </div>
        </div>
    );
}
