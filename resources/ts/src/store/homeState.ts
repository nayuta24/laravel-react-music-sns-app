import { atom } from "recoil";

export const homeState = atom( {
    key: "homeState",
    default: { topic:"recent" }
} );
