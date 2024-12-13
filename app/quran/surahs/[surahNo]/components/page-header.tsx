import Link from "next/link";

export default function PageHeader(
    { children, href, surahNameArabic }: {
        href?: string;
        surahNameArabic?: string;
        children?: React.ReactNode;
    }
) {
    return (
        <header className="grid place-items-center w-full h-[15vh] ">

            <div className="relative flex p-4 gap-4 rtl:flex-row-reverse w-full items-center">

                {surahNameArabic ?

                    (<h1 className=" !leading-relaxed !tracking-normal  flex-1 text-4xl font-semibold">{surahNameArabic}</h1>)
                    :
                    (<h1 className="!leading-relaxed !tracking-normal  grid p-4 flex-1 text-5xl font-semibold">
                        <span className="w-40 h-9 bg-stone-300 dark:bg-stone-800 rounded  animate-pulse"></span>
                    </h1>)
                }
                {/* Back Button */}
                {(!children && href) &&
                    (<Link
                        className="grid place-items-center my-auto outline-none border-none size-12 rounded-full p-3  dark:hover:bg-stone-800 hover:bg-stone-200 focus:outline-none focus:ring ring-current active:bg-stone-800"
                        href={href}
                    >
                        <span className="sr-only"> Download </span>
                        <span className="[&>svg]:size-5  [&>svg]:dark:hover:bg-stone-800 [&>svg]:hover:bg-stone-200 ">
                            {!children && <svg

                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>}
                        </span>
                    </Link>
                    )}
                {(!children && !href) && (
                    <Link
                        className="grid place-items-center my-auto outline-none border-none size-12 rounded-full p-3  dark:hover:bg-stone-800 hover:bg-stone-200 focus:outline-none focus:ring ring-current active:bg-stone-800"
                        href="/quran/surahs"
                    >
                        <span className="sr-only">Back</span>
                        <span className="size-5  bg-stone-300 dark:bg-stone-800 rounded-full  animate-pulse"></span>

                    </Link>
                )}
            </div>

        </header>
    )
}