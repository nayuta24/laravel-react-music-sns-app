import { useCallback } from "react";
import { useSetRecoilState } from "recoil";

import apiClient from "../../client/apiClient";
import { loginState } from "../../store/loginState";
import { meState} from "../../store/meState"

type Me = {
    id: string;
    name: string;
    email: string;
}

export const useGetMe = () =>
{
    const setIsLogin = useSetRecoilState( loginState );
    const setMe = useSetRecoilState( meState );

    // ユーザーの情報を取得できない＝ログインしていないとみなし、
    // その場合はログイン状態管理（isLogin）がfalseとなる
    const getMe = useCallback(() => {
        apiClient
            .get<Me>(`/api/me`)
            .then( ( res ) =>
            {
                setMe( res.data );
                setIsLogin( { isLogin:true});
            }
            )
            .catch( () =>
            {
                setMe( {id:"1", name:"ああ", email:"aaa"} );
                setIsLogin( { isLogin:false});
            })
    }, []);

    return { getMe };
};
