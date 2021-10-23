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
                setIsLogin( { isLogin:true});
            }
            )
            .catch( () =>
            {
                /* どの画面でも必ず必要なユーザー情報が取得できない場合 = ログインしてない
                なのでログイン画面へリダイレクト */
                showMessage( { title: "ログインしていません", status: "error" } );
                history.push("/login");
            })
            .finally(() => setLoading(false));
    }, []);

    return { getMe, apiMe, loading };
};
