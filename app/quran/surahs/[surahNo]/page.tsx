import { fetcher } from "@/app/lib/fetcher";
import PageMock from "./components/page-mock";

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
        <PageMock surahNameArabic={surah.surahNameArabic} ayahArrAR={surah.arabic1} surahNo={surah.surahNo} />)
}