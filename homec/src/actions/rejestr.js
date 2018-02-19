import {ODCZYT_REJESTRU, ZMIANA_REJESTRU} from "./types"

export const odczytRejestru = (dane) => ({type: ODCZYT_REJESTRU, dane})
export const zmianaRejestru = (dane) => ({type: ZMIANA_REJESTRU, dane})
