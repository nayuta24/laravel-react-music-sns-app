import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router";
import apiClient from "../../client/apiClient";
import { useMessage} from "../message/useMessage";


export const useLogin = () => {
    const { showMessage } = useMessage();
    const history = useHistory();

    const [ user, setUser ] = useState();

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
                        history.push( "/" );
                    } ).catch( error =>
                    {
                        showMessage( { title: "ユーザーが見つかりません", status: "error" } );
                    })
            })
    }, [] );
    return { login };
}
