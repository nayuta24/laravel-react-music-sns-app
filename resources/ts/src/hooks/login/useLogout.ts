import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";
import apiClient from "../../client/apiClient";
import { loginState } from "../../store/loginState";
import { useMessage} from "../message/useMessage";


export const useLogout = () => {
    const { showMessage } = useMessage();
    const history = useHistory();
    const setIsLogin = useSetRecoilState( loginState );

    const logout = useCallback( ( ) =>
    {
        axios.post( "api/logout" )
            .then( res =>
            {
                localStorage.removeItem( "auth" );
                setIsLogin( { isLogin:false});
                history.push( "/login" );
                showMessage( { title: "ログアウトしました", status: "success" } );
            } ).catch( res =>
            {
                showMessage( { title: "ログアウトに失敗しました", status: "error" } );
            })
    }, [] );
    return { logout };
}
