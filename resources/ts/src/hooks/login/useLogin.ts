import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router";
import { useMessage} from "../message/useMessage";


export const useLogin = () => {
    const { showMessage } = useMessage();
    const history = useHistory();

    const [ user, setUser ] = useState();
    const [token, setToken] = useState();

    type Response = {
        result: boolean;
        token: string;
    }

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

        // axios.get( 'sanctum/csrf-cookie', {withCredentials: true} )
        //     .then( res =>
        //     {
        //         const url = "/api/login";
        //         const data = {
        //             email: mail,
        //             password: password
        //         }
        //         axios.post<Response>( url, data, {withCredentials: true} )
        //             .then( res =>
        //             {
        //                 setUser(res.data.token);
        //                 showMessage( { title: "ログインしました", status: "success" } );
        //                 history.push( "/recent" );
        //             } ).catch( error =>
        //             {
        //                 showMessage( { title: "ユーザーが見つかりません", status: "error" } );
        //             })
        //     })

        axios.post( '/api/login', {
            Headers: {
                "Content-Type": "application/json",
                email: mail,
                password: password
            }
        }).then( res =>
            {
                showMessage( { title: "ログインしました", status: "success" } );
                history.push( "/recent" );
            } ).catch( error =>
            {
                showMessage( { title: "ユーザーが見つかりません", status: "error" } );
            })
    }, [] );
    return { login };
}
