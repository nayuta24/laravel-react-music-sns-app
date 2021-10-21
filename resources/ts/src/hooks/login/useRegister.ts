import axios from "axios";
import { useCallback } from "react"
import { useHistory } from "react-router";
import { useMessage} from "../message/useMessage";


export const useRegister = () => {
    const { showMessage } = useMessage();
    const history = useHistory();



    const register = useCallback( (name:string, mail: string, password: string ) =>
    {
        const data = {
            name: name,
            mail: mail,
            password: password
        }

        axios.post( "api/register", data )
            .then( ( res ) =>
            {
                if ( res.status == 200 )
                {
                    showMessage( { title: "新規登録に成功しました", status: "success" } );
                    history.push( '/home' )
                }
            } )
            .catch(  () =>
            {
                showMessage( { title: "新規登録に失敗しました", status: "error" } );
            })
    }, [] );
    return {  register };
}
