import { useCallback, useState } from "react";

import apiClient from "../../client/apiClient";
import { TrackDataType } from "../../type/api/TrackDataType";
import {useMessage} from "../message/useMessage"


export const useGetTrack = () =>
{
    const { showMessage } = useMessage();
    const getTrack = useCallback( ( id: string | undefined, saveTrack: (val:TrackDataType )=>void ) =>
    {
        var track: TrackDataType

        apiClient
            .get<TrackDataType>(`/api/track/${id}`)
            .then( ( res ) =>
            {
                saveTrack(res.data)
            }
            )
            .catch( () =>
            {
                saveTrack( undefined )
                showMessage( {title: "楽曲を取得できませんでした",status: "error",});
            })
    }, []);

    return { getTrack };
};
