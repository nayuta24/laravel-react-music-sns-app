import axios from "axios";
import { useCallback } from "react"
import { useMessage} from "../message/useMessage";
import { useLogin } from "./useLogin";


export const useRegister = () => {
    const { showMessage } = useMessage();
    const { login } = useLogin();



    const register = useCallback( (name:string, mail: string, password: string ) =>
    {
        const data = {
            name: name,
            email: mail,
            password: password
        }

        axios.post( "api/register", data )
            .then( ( res ) =>
            {
                if ( res.status == 200 )
                {
                    login(mail,password)
                }
            } )
            .catch(  () =>
            {
                showMessage( { title: "新規登録に失敗しました", status: "error" } );
            })
    }, [] );
    return {  register };
}
