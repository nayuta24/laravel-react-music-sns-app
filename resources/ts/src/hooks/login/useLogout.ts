import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router";
import apiClient from "../../client/apiClient";
import { useMessage} from "../message/useMessage";


export const useLogout = () => {
    const { showMessage } = useMessage();
    const history = useHistory();

    const logout = useCallback( ( ) =>
    {
        axios.post( "api/logout" )
            .then( res =>
            {
                showMessage( { title: "ログアウトしました", status: "success" } );
                localStorage.removeItem( "auth" );
                history.push( "/login" );
            })
    }, [] );
    return { logout };
}
