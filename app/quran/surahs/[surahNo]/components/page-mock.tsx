import Link from "next/link";

type props = {
    surahNameArabic: string;
    ayahArrAR: string[];
    surahNo: number;
}
export default function PageMock({ ayahArrAR, surahNameArabic, surahNo }: props) {
    return (
        <>

            <div className="flex flex-col  w-full h-full max-w-screen-sm max-h-svh mx-auto bg-stone-50 dark:bg-stone-950  text-stone-700 dark:text-stone-300 py-2">
                <header className="relative flex ">
                    <h1 className=" !leading-relaxed !tracking-normal text-center flex-1 text-5xl font-semibold">{surahNameArabic}</h1>
                    {/* Back Button */}
                    <Link
                        className="grid place-items-center outline-none border-none size-12 rounded-full  p-3 absolute top-1/4 dark:hover:bg-stone-800 hover:bg-stone-200   focus:outline-none focus:ring active:bg-stone-800"
                        href="/quran/surahs"
                    >
                        <span className="sr-only"> Download </span>

                        <svg
                            className="size-5 rtl:rotate-180"
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
                        </svg>
                    </Link>

                </header>
                <div className="relative w-full h-full flex-1   overflow-hidden rounded-lg  px-5 py-4 mt-2 bg-stone-200 dark:bg-stone-900">
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-stone-50/80 dark:from-stone-950/80 to-transparent z-10"></div>{" "}
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-stone-50/80 dark:from-stone-950/80 to-transparent z-10"></div>
                    <p className="relative  !leading-relaxed !tracking-normal text-lg md:text-3xl text-justify  inline-block  w-full h-full  min-h-[50vh] md:max-h-[80vh] max-h-[85vh] overflow-y-auto scrollbar-hide pt-2">
                        {ayahArrAR.map((ayah, i: number) => (
                            <a id={`ayah-${surahNo}`} className=" pb-2" key={Number(i + 1)}>
                                <span>{ayah}</span>
                                <span className="mx-1">{Number(i + 1).toLocaleString('ar')}</span>
                            </a>
                        ))}

                    </p>{" "}
                </div>
            </div>
        </>
    )
}