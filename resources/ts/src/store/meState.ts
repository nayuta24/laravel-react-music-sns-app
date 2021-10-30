import { atom } from "recoil";
import { MeData } from "../type/api/MeDataType";

export const meState = atom<MeData>( {
    key: "meState",
    default: { id:undefined, name:undefined, email:undefined }
} );
