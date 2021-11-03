import { atom } from "recoil";
import { UserData } from "../type/api/UserDataType";

export const meState = atom<UserData>( {
    key: "meState",
    default: { id:undefined, name:undefined, email:undefined, title:undefined, image: undefined, body: undefined }
} );
