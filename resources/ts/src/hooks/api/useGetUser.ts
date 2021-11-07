import { useCallback, useState } from "react";

import apiClient from "../../client/apiClient";
import { UserData } from "../../type/api/UserDataType"

export const useGetUser = () =>
{
    const [ user, setUser ] = useState<UserData>();

    const getUser = useCallback((id:string|undefined) => {
        apiClient
            .get<UserData>(`/api/user/${id}`)
            .then( ( res ) =>
            {
                setUser( res.data );
            }
            )
            .catch( () =>
            {

            } )
    }, []);

    return { getUser, user };
};
