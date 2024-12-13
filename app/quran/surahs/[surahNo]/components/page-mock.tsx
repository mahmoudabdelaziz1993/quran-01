import PageHeader from "../../../components/page-header";
import VerticalScrollParagraph from "../../../components/vertical-scroll-paragraph";


type props = {
    surahNameArabic: string;
    ayahArrAR: string[];
    surahNo: number;
}
export default function PageMock({ ayahArrAR, surahNameArabic, surahNo }: props) {
    return (
        <>

            <div className="flex flex-col  w-full h-full max-w-screen-sm max-h-svh mx-auto bg-stone-50 dark:bg-stone-950  text-stone-700 dark:text-stone-300 px-2">
                <PageHeader surahNameArabic={surahNameArabic} href={`/quran/surahs/`} />
                <VerticalScrollParagraph>
                    {ayahArrAR.map((ayah, i: number) => (
                        <a id={`ayah-${surahNo}`} className=" pb-2" key={Number(i + 1)}>
                            <span>{ayah}</span>
                            <span className="mx-1">{Number(i + 1).toLocaleString('ar')}</span>
                        </a>
                    ))}
                </VerticalScrollParagraph>
            </div>
        </>
    )
}