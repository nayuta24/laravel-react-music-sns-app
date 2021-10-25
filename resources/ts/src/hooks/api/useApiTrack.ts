import { useCallback, useState } from "react";

import apiClient from "../../client/apiClient";
import { TrackDataType } from "../../type/api/TrackDataType";

export const useTrack = () =>
{
    const getTrack = useCallback( ( id: string | undefined ) =>
    {
        var track: TrackDataType

        apiClient
            .get<TrackDataType>(`/api/track/${id}`)
            .then( ( res ) =>
            {
                track = res.data
                console.log( track );
            }
            )
            .catch( () =>
            {
                track=undefined
            })
        return track
    }, []);

    return { getTrack};
};
