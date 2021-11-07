import axios from "axios";
import { useCallback} from "react"
import { useHistory } from "react-router";
import { useSetRecoilState } from "recoil";
import { loginState } from "../../store/loginState";
import { meState } from "../../store/meState";
import { useMessage} from "../message/useMessage";


export const useLogout = () => {
    const { showMessage } = useMessage();
    const history = useHistory();
    const setIsLogin = useSetRecoilState( loginState );
    const setMe = useSetRecoilState( meState );

    const logout = useCallback( ( ) =>
    {
        axios.post( "api/logout" )
            .then( res =>
            {
                localStorage.removeItem( "auth" );
                setIsLogin( { isLogin: false } );
                setMe( {id:undefined, name:undefined, email:undefined, job:undefined, image: undefined, body:undefined} );
                history.push( "/login" );
                showMessage( { title: "ログアウトしました", status: "success" } );
            } ).catch( res =>
            {
                showMessage( { title: "ログアウトに失敗しました", status: "error" } );
            })
    }, [] );
    return { logout };
}
