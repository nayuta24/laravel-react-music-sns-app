import { atom } from "recoil";

type HomeStateType = {
    key: "string",
    default: {
        topic:"recent"|"follow"|"popular"|"detail"
    }
}

export const homeState = atom( {
    key: "homeState",
    default: { topic:"recent" }
} );
