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

export const useGetMe = () =>
{
    const [ loading, setLoading ] = useState( false );
    const [ apiMe, setApiMe ] = useState<Me>(NullMe);
    const setIsLogin = useSetRecoilState( loginState );

    // ユーザーの情報を取得できない＝ログインしていないとみなし、
    // その場合はログイン状態管理（isLogin）がfalseとなる

    const getMe = useCallback(() => {
        setLoading(true);
        apiClient
            .get<Me>(`/api/me`)
            .then( ( res ) =>
            {
                setApiMe( res.data );
                setIsLogin( { isLogin:true});
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
