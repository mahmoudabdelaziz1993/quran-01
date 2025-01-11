"use client";

import { useState } from "react";
import PlayAyahButton from "./play-ayah-button";
import IconButton from "./icon-button";

export default function Ayah({
  surahNo,
  ayahNo,
  ayahString,
}: {
  surahNo: number;
  ayahNo: number;
  ayahString: string;
}) {
  const [controlPanel, setControlPanel] = useState(false);
  return (
    <>
     <div
        className={`  fixed top-0 left-0  ${controlPanel ? "" : "hidden"} grid place-items-center w-screen h-screen bg-zinc-50/10 dark:bg-zinc-950/5 backdrop-blur-sm z-10`}
      >
        <div className="grid bg-zinc-50  dark:bg-zinc-950 rounded-xl
 gap-4  max-w-screen-sm w-full mx-auto  p-8 place-items-center text-center  ">
        <div className="flex w-full">
            <IconButton onClick={() => setControlPanel(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="m8 8l32 32M8 40L40 8"/></svg>
            </IconButton>
        </div>
        <div className="p-2  flex gap-4 items-center">
        
            <p className="lg:text-4xl text-2xl font-semibold p-4 leading-extra-loose">
                {ayahString}
            </p>
        </div>
        <div className="p-2  flex gap-4 items-center">
          <IconButton onClick={() => navigator.clipboard.writeText(ayahString)}>
            <svg
              className="size-6 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.5 3A2.5 2.5 0 0 0 5 5.5v8A2.5 2.5 0 0 0 7.5 16h6a2.5 2.5 0 0 0 2.5-2.5v-8A2.5 2.5 0 0 0 13.5 3zM6 5.5A1.5 1.5 0 0 1 7.5 4h6A1.5 1.5 0 0 1 15 5.5v8a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 6 13.5z"
                clipRule="evenodd"
              />
              <path
                fill="currentColor"
                d="M8 6.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-8-10A2.5 2.5 0 0 1 2.5 0h6c.979 0 1.83.562 2.24 1.38c.152.303-.104.618-.443.618c-.227 0-.422-.149-.549-.338a1.5 1.5 0 0 0-1.24-.662h-6a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h1a.5.5 0 0 1 0 1h-1a2.5 2.5 0 0 1-2.5-2.5v-8z"
              />
            </svg>
          </IconButton>
          <PlayAyahButton ayahNo={ayahNo} surahNo={surahNo} />
        </div>
        </div>
      </div>
      <a
      id={`${surahNo}-${ayahNo}`}
      className=" pb-2 group cursor-pointer relative"
      key={`${surahNo}-${ayahNo}`}
      onClick={() => setControlPanel(!controlPanel)}
    >
     

      <span className="group-hover:bg-zinc-300 dark:group-hover:bg-zinc-700 transition duration-75 ease-in-out delay-300 rounded-md select-text">
        {ayahString}
      </span>
    </a>
      </>
    
  );
}
