import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import apiClient from "../../client/apiClient";
import { UserData } from "../../type/api/UserDataType"

export const useGetUser = () =>
{
    const [ user, setUser ] = useState<UserData>();
    const [ loading, setLoading ] = useState( false )
        const history = useHistory()


    const getUser = useCallback( ( id: string | undefined ) =>
    {
        setLoading( true );

        apiClient
            .get<UserData>(`/api/user/${id}`)
            .then( ( res ) =>
            {
                setUser( res.data );
            }
            )
            .catch( () =>
            {
                history.push("/page404")
            } )
            .finally( () => setLoading( false ) );
    }, []);

    return { getUser, user, loading };
};
