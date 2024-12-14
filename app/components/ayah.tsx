'use client'

import IconButton from "./icon-button"

export default function Ayah({ surahNo, ayahNo, ayahString }: {
    surahNo: number,
    ayahNo: number,
    ayahString: string
}) {
    return (
        <a id={`${surahNo}-${ayahNo}`} className=" pb-2 group cursor-pointer relative" key={`${surahNo}-${ayahNo}`}>
            <span className=" hidden group-hover:inline-flex gap-2 w-max max-w-sm absolute   -top-12  z-50  p-2 mb-1  rounded-lg dark:bg-zinc-950/20 bg-zinc-50/20 text-zinc-700 dark:text-zinc-300 border shadow shadow-current   backdrop-blur-sm">

                <button
                    className="inline-block rounded-md  p-2  hover:bg-zinc-300  dark:hover:bg-zinc-700 focus:outline-none focus:ring active:bg-zinc-500 ring-current"

                >
                    <span className="sr-only"> Copy to clipboards </span>


                    <svg className="size-4 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M7.5 3A2.5 2.5 0 0 0 5 5.5v8A2.5 2.5 0 0 0 7.5 16h6a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 13.5 3zM6 5.5A1.5 1.5 0 0 1 7.5 4h6A1.5 1.5 0 0 1 15 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 6 13.5z" clipRule="evenodd" /><path fill="currentColor" d="M8 6.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-8-10A2.5 2.5 0 0 1 2.5 0h6c.979 0 1.83.562 2.24 1.38c.152.303-.104.618-.443.618c-.227 0-.422-.149-.549-.338a1.5 1.5 0 0 0-1.24-.662h-6a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h1a.5.5 0 0 1 0 1h-1a2.5 2.5 0 0 1-2.5-2.5v-8z" /></svg>
                </button>
                <IconButton
                    onClick={() => {
                        console.log(`${surahNo}-${ayahNo}`);

                    }}


                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3 12v6.967c0 2.31 2.534 3.769 4.597 2.648l3.203-1.742M3 8V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968a2.998 2.998 0 0 1 0 5.294l-6.406 3.484" /></svg>
                </IconButton>
            </span>

            <span className="group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700 transition duration-75 ease-in-out delay-300 rounded-md select-text">
                {ayahString}
            </span>


        </a>
    )
}