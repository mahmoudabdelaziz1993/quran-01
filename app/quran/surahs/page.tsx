import { fetcher } from "@/app/lib/fetcher"
import { Surah } from "@/app/types/Surah"


export default async function Surahs() {

    // const filters: { [key: string]: string | string[] | undefined } = await searchParams


    const { data: surahs } = await fetcher<{ data: Surah[] }>('https://api.alquran.cloud/v1/surah', { method: 'GET' })
    console.log("surahs", surahs);

    return (
        <div>
            <ul className="w-full flex flex-col gap-2 min-h-screen max-w-screen-sm mx-auto border shadow-lg rounded-lg bg-Stone-50  dark:bg-Stone-950  p-2  ">
                {
                    surahs.map((surah: Surah) => (
                        <li className="flex flex-col gap-2 p-4 [&]:hover:bg-stone-200 dark:[&]:hover:bg-stone-800 rounded-md  " key={surah.number}>
                            <a href={`/quran/surahs/${surah.number}`} className="flex gap-2 items-end cursor-pointer  ">
                                <span className=" text-3xl aspect-square w-12 grid place-items-center  rounded-full bg-stone-100 dark:bg-stone-900">{Number(surah.number).toLocaleString('ar-EG')}</span>
                                <span className="text-5xl font-semibold"> {surah.name}</span>
                                <div className="grid gap-1"><span className="text-lg font-medium text-stone-600 dark:text-stone-200">{surah.englishName}</span>
                                    <p className=" text-stone-800 dark:text-stone-400 inline-flex  gap-1 items-center  ">
                                        <span className=" size-4 inline-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 15.123c1.224-1.804 5.486-4.684 8.714-4.748l5.507 15.413C34.423 26.77 27.85 29.46 24 33.194c-3.85-3.735-10.423-6.425-14.22-7.406l5.506-15.413c3.228.064 7.49 2.944 8.714 4.748" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.42 12.354l4.104 1.281l4.895 13.75a1.4 1.4 0 0 1-.714 1.734L24 37.625L6.295 29.119a1.4 1.4 0 0 1-.713-1.734l4.894-13.75l4.103-1.281" /></svg>
                                        </span>
                                        <span className="text-xs"> {surah.numberOfAyahs}</span>

                                    </p>
                                    <p className=" text-stone-800 dark:text-stone-400 inline-flex  gap-1 items-center  ">
                                        <span className=" size-4 inline-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M14 10h2v.757a4.5 4.5 0 0 1 7 3.743V20h-2v-5.5c0-1.43-1.174-2.5-2.5-2.5S16 13.07 16 14.5V20h-2zm-2-6v2H4v5h8v2H4v5h8v2H2V4z" /></svg>
                                        </span>
                                        <span className="text-xs"> {surah.englishNameTranslation}</span>

                                    </p>
                                </div>

                            </a>
                        </li>
                    ))}
            </ul>
        </div>
    )
}