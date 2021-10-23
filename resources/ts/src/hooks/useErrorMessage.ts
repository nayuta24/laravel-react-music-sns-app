import { useRecoilValue } from "recoil";
import { loginState } from "../store/loginState";
import { useMessage } from "./message/useMessage";

export const useErrorMessage = () =>
{
    const { showMessage } = useMessage();
    const { isLogin } = useRecoilValue( loginState );
    
    const ErrorMessage = ( message: string ) =>
    {
        // 認証エラー以外の場合のみメッセージを吐く
        if ( isLogin )
        {
            showMessage( { title: message, status: "error" } );
        }
    }

    return ErrorMessage;
}
