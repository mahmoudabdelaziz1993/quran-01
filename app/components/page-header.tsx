import Link from "next/link";

export default function PageHeader(
    { children, href, surahNameArabic }: {
        href?: string;
        surahNameArabic?: string;
        children?: React.ReactNode;
    }
) {
    return (
        <header className="grid place-items-center w-full h-20 ">

            <div className="relative flex px-5 font gap-4 rtl:flex-row-reverse w-full items-center">

                {surahNameArabic ?

                    (<h1 className=" !leading-relaxed !tracking-normal  flex-1 md:text-5xl text-2xl font-semibold">{surahNameArabic}</h1>)
                    :
                    (<h1 className="!leading-relaxed !tracking-normal  grid p-4 flex-1 text-5xl font-semibold">
                        <span className="w-40 h-9 bg-zinc-300 dark:bg-zinc-800 rounded  animate-pulse"></span>
                    </h1>)
                }
                {/* Back Button */}
                {(children || href) &&
                    (<Link
                        className="grid place-items-center my-auto outline-none border-none size-12 rounded-full p-3  dark:hover:bg-zinc-800 hover:bg-zinc-200 focus:outline-none focus:ring ring-current active:bg-zinc-800"
                        href={href ?? "/"}
                    >

                        <span className="[&>svg]:size-5 [&>svg]:rtl:rotate-180 [&>svg]:dark:hover:bg-zinc-800 [&>svg]:hover:bg-zinc-200 ">
                            {!children && <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64" /><path fill="currentColor" d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z" /></svg>}
                            {children && children}
                        </span>
                    </Link>
                    )}
                {(!children && !href) && (
                    <Link
                        className="grid place-items-center my-auto outline-none border-none size-12 rounded-full p-3  dark:hover:bg-zinc-800 hover:bg-zinc-200 focus:outline-none focus:ring ring-current active:bg-zinc-800"
                        href="/quran/surahs"
                    >
                        <span className="sr-only">Back</span>
                        <span className="size-5  bg-zinc-300 dark:bg-zinc-800 rounded-full  animate-pulse"></span>

                    </Link>
                )}
            </div>

        </header>
    )
}