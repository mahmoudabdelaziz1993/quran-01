'use client'

import { useEffect, useRef, useState } from "react";
import IconButton from "./icon-button";

export default function PlayAyahButton({ ayahNo, surahNo }: { ayahNo: number, surahNo: number }) {

    const [playing, setPlay] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (playing) {
            const audio = audioRef.current
            audio?.play()
            audio?.addEventListener('ended', () => {
                setPlay(false)
            })
        } else {
            audioRef.current?.pause()
        }
    }, [playing])

    return (
        <>
            <IconButton
                onClick={() => setPlay(!playing)}
            >
                {playing ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="1.5" d="M2 6c0-1.886 0-2.828.586-3.414S4.114 2 6 2s2.828 0 3.414.586S10 4.114 10 6v12c0 1.886 0 2.828-.586 3.414S7.886 22 6 22s-2.828 0-3.414-.586S2 19.886 2 18zm12 0c0-1.886 0-2.828.586-3.414S16.114 2 18 2s2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18z" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M3 12v6.967c0 2.31 2.534 3.769 4.597 2.648l3.203-1.742M3 8V5.033c0-2.31 2.534-3.769 4.597-2.648l12.812 6.968a2.998 2.998 0 0 1 0 5.294l-6.406 3.484" /></svg>
                )}
            </IconButton>
            <audio ref={audioRef} src={`https://quranaudio.pages.dev/2/${surahNo}_${ayahNo}.mp3`}></audio>
        </>
    )
}
