import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";
import apiClient from "../../client/apiClient";
import { loginState } from "../../store/loginState";
import { useMessage} from "../message/useMessage";


export const useLogin = () => {
    const { showMessage } = useMessage();
    const history = useHistory();

    const [ user, setUser ] = useState();
    const setIsLogin = useSetRecoilState( loginState );

    const login = useCallback( (mail: string, password: string ) =>
    {
        apiClient.get( 'sanctum/csrf-cookie')
            .then( res =>
            {
                apiClient.post( "/api/login", {
                    email: mail,
                    password: password
                })
                    .then( res =>
                    {
                        showMessage( { title: "ログインしました", status: "success" } );
                        setIsLogin( { isLogin:true});
                        history.push( "/" );
                    } ).catch( error =>
                    {
                        showMessage( { title: "ユーザーが見つかりません", status: "error" } );
                    })
            })
    }, [] );
    return { login };
}
