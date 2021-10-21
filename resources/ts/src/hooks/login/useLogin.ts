import axios from "axios";
import { useCallback } from "react"
import { useHistory } from "react-router";
import { useMessage} from "../message/useMessage";


export const useLogin = () => {
    const { showMessage } = useMessage();

    const history = useHistory();

    const login = useCallback( (mail: string, password: string ) =>
    {
        // if ( mail === "yuta" && password === "123" )
        // {
        //     showMessage( { title: "ログインしました", status: "success" } );
        //     history.push("/")
        // } else
        // {
        //     showMessage( { title: "ユーザーが見つかりません", status: "error" } );
        // }

        axios.get( 'sanctum/csrf-cookie' )
            .then( res =>
            {
                const url = "/api/login";
                const data = {
                    email: mail,
                    password: password
                }
                axios.post( url, data )
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
