import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";

import apiClient from "../../client/apiClient";
import { loginState } from "../../store/loginState";
import { useMessage } from "../message/useMessage";

type Me = {
    id: string;
    name: string;
    email: string;
}

const NullMe:Me = {id:"", name:"", email:""}

export const useApiMe = () =>
{
    const [ loading, setLoading ] = useState( false );
    const [ apiMe, setApiMe ] = useState<Me>(NullMe);
    const history = useHistory();
    const { showMessage } = useMessage();
    const setIsLogin = useSetRecoilState( loginState );


    const getMe = useCallback(() => {
        setLoading(true);
        apiClient
            .get<Me>(`/api/me`)
            .then( ( res ) =>
            {
                setApiMe( res.data );
            }
            )
            .catch( () =>
            {
                setIsLogin( { isLogin:false});
            })
            .finally(() => setLoading(false));
    }, []);

    return { getMe, apiMe, loading };
};
