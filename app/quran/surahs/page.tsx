import { fetcher } from "@/app/lib/fetcher";
import { Surah } from "@/app/types/Surah";
import Link from "next/link";
import PageHeader from "../components/page-header";

export default async function Surahs() {
    // const filters: { [key: string]: string | string[] | undefined } = await searchParams

    const { data: surahs } = await fetcher<{ data: Surah[] }>(
        "https://api.alquran.cloud/v1/surah",
        { method: "GET" }
    );
    console.log("surahs", surahs);

    return (
        <>
            <div className="flex flex-col  w-full h-full max-w-screen-sm max-h-svh mx-auto bg-stone-50 dark:bg-stone-950  text-stone-700 dark:text-stone-300 py-2">
                <PageHeader surahNameArabic={"سور القرآن الكريم"} href={`/quran/surahs/`} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7 9V7h14v2zm0 4v-2h14v2zm0 4v-2h14v2zM4 9q-.425 0-.712-.288T3 8t.288-.712T4 7t.713.288T5 8t-.288.713T4 9m0 4q-.425 0-.712-.288T3 12t.288-.712T4 11t.713.288T5 12t-.288.713T4 13m0 4q-.425 0-.712-.288T3 16t.288-.712T4 15t.713.288T5 16t-.288.713T4 17" /></svg>
                </PageHeader>

                <div className="relative w-full h-[calc(100vh-80px)] max-w-screen-sm  shadow-lg overflow-hidden rounded-lg bg-stone-50 dark:bg-stone-950 mx-auto text-stone-950 dark:text-stone-50 px-2">
                    {" "}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-stone-50 dark:from-stone-950 to-transparent z-10"></div>{" "}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-stone-50 dark:from-stone-950 to-transparent z-10"></div>
                    <ul className="relative w-full flex flex-col gap-5 pb-8 mt-5 h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">
                        {" "}
                        {surahs.map((surah: Surah) => (
                            <li
                                className="flex flex-col gap-5 px-5 py-4 select-none hover:bg-stone-200 focus-within:bg-stone-200 focus-within:dark:bg-stone-800 dark:hover:bg-stone-800 rounded-md"
                                key={surah.number}
                            >
                                <Link
                                    href={`/quran/surahs/${surah.number}`}
                                    className="outline-none flex md:text-5xl text-2xl gap-5 items-end cursor-pointer"
                                >
                                    <span>{Number(surah.number).toLocaleString("ar-EG")}</span>{" "}
                                    <span className="font-semibold flex-1">{surah.name}</span>{" "}
                                </Link>{" "}
                            </li>
                        ))}{" "}
                    </ul>{" "}
                </div>
            </div>
        </>
    );
}
