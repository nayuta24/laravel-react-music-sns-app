import { useCallback, useState } from "react";
import { useMessage } from "./message/useMessage";

export const useValidateTrackURL = () =>
{    const head = /(https\:\/\/open\.spotify\.com\/track\/)/;
    const foot = /(\?si=)/;
    const validateTrackURL = useCallback( ( url: string ) =>
    {
        var id:string|undefined;
        const regexHead = head.test( url );
        const regexFoot = foot.test( url );
        {
            // urlの頭とおしりがspotifyの楽曲シェアURLのものか判定
            if ( regexHead && regexFoot )
            {
                 const result = url.match(
                    /https\:\/\/open\.spotify\.com\/track\/(.*)\?si=/
                 );
                // もし楽曲のURLであれば、楽曲IDの部分の文字数が適切なものか判定
                if ( result![1].length === 22 )
                {
                    id = result![1];
                }
                else
                {
                    id = undefined;
                }
            } else{
                    id = undefined;
            }
        }
        return id;
    },[])
        return { validateTrackURL }
}
