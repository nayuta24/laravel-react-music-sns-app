import { string } from "prop-types";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";

import apiClient from "../../client/apiClient";
import {useMessage} from "../message/useMessage"


export const usePostCreate = () =>
{
    const history = useHistory();
    const { showMessage } = useMessage();
    const postCreate = useCallback( ( title:string, body:string, rate: number, trackId:string|undefined, setTransAlert:(bool:boolean)=>void ) =>
    {
        const data = {
            title: title,
            body: body,
            rate: rate,
            trackId:trackId
        }

        apiClient
            .post( `/api/create`, data)
            .then( ( res ) =>
            {
                showMessage( { title: "投稿しました", status: "success", } );
                setTransAlert( false );
                history.push( "/" );
            }
            )
            .catch( () =>
            {
                showMessage( {title: "投稿に失敗しました",status: "error",});
            })
    }, []);

    return { postCreate };
};
