import { fetcher } from "@/app/lib/fetcher";
import { Surah } from "@/app/types/Surah";
import Link from "next/link";

export default async function Surahs() {
    // const filters: { [key: string]: string | string[] | undefined } = await searchParams

    const { data: surahs } = await fetcher<{ data: Surah[] }>(
        "https://api.alquran.cloud/v1/surah",
        { method: "GET" }
    );
    console.log("surahs", surahs);

    return (
        <div className="relative w-full h-full max-w-screen-sm max-h-svh  shadow-lg overflow-hidden rounded-lg bg-stone-50 dark:bg-stone-950 mx-auto text-stone-950 dark:text-stone-50 px-2 py-4">
            {" "}
            <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-stone-50/80 dark:from-stone-950/80 to-transparent z-10"></div>{" "}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-stone-50/80 dark:from-stone-950/80 to-transparent z-10"></div>
            <ul className="relative w-full flex flex-col gap-2 h-[95vh] overflow-y-auto scrollbar-hide">
                {" "}
                {surahs.map((surah: Surah) => (
                    <li
                        className="flex flex-col gap-2 px-8 py-12 select-none hover:bg-stone-200 focus-within:bg-stone-200 focus-within:dark:bg-stone-800 dark:hover:bg-stone-800 rounded-md"
                        key={surah.number}
                    >
                        <Link
                            href={`/quran/surahs/${surah.number}`}
                            className="outline-none flex md:text-5xl text-2xl gap-2 items-end cursor-pointer"
                        >
                            <span>{Number(surah.number).toLocaleString("ar-EG")}</span>{" "}
                            <span className="font-semibold flex-1">{surah.name}</span>{" "}
                        </Link>{" "}
                    </li>
                ))}{" "}
            </ul>{" "}
        </div>
    );
}
