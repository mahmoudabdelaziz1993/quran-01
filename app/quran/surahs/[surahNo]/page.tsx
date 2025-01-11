import Ayah from "@/app/components/ayah";
import PageHeader from "@/app/components/page-header";
import VerticalScrollParagraph from "@/app/components/vertical-scroll-paragraph";
import { fetcher } from "@/app/lib/fetcher";

export type Surah = {
    surahName: string;
    surahNameArabic: string;
    surahNameArabicLong: string;
    surahNameTranslation: string;
    revelationPlace: string;
    totalAyah: number;
    surahNo: number;
    english: string[];
    arabic1: string[];
    arabic2: string[];
}

export default async function Surah({
    params,
}: {
    params: Promise<{ surahNo: string }>
}) {
    const surahNo = (await params).surahNo

    const surah = await fetcher<Surah>(
        `https://quranapi.pages.dev/api/${Number(surahNo)}.json`,
        { method: "GET" }
    );
    console.log("surah", surah);

    return (
        <div className="flex md:flex-col flex-col-reverse  w-full h-full max-w-screen-xl max-h-svh mx-auto bg-zinc-50 dark:bg-zinc-950  text-zinc-700 dark:text-zinc-300 px-2">
            <PageHeader surahNameArabic={surah.surahNameArabic} href={`/quran/surahs/`} />
            <VerticalScrollParagraph>
                {surah.arabic1.map((ayah, i: number) => (
                    <Ayah surahNo={surah.surahNo} ayahNo={(i + 1)} ayahString={" " + ayah + " " + Number(i + 1).toLocaleString('ar')} key={`${surah.surahNo}-${Number(i + 1)}`} />
                    // <a id={`ayah-${surahNo}`} className=" pb-2 group cursor-pointer" key={Number(i + 1)}>
                    //     <span className="group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700 transition duration-75 ease-in-out delay-300 rounded-md select-text">{" " + ayah + " " + Number(i + 1).toLocaleString('ar')}</span>


                    // </a>
                ))}
            </VerticalScrollParagraph>
        </div>)
}