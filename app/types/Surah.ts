// To parse this data:
//
//   import { Convert } from "./file";
//
//   const surah = Convert.toSurah(json);

export type Surah = {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
    numberOfAyahs: number;
    revelationType: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toSurah(json: string): Surah[] {
        return JSON.parse(json);
    }

    public static surahToJson(value: Surah[]): string {
        return JSON.stringify(value);
    }
}
