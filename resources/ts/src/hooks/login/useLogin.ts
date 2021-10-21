import axios from "axios";
import { useCallback } from "react"
import { useHistory } from "react-router";
import { useMessage} from "../message/useMessage";


export const useLogin = () => {
    const { showMessage } = useMessage();

    const history = useHistory();

    const login = useCallback( (mail: string, password: string ) =>
    {
        if ( mail === "yuta" && password === "123" )
        {
            showMessage( { title: "ログインしました", status: "success" } );
            history.push("/home")
        } else
        {
            showMessage( { title: "ユーザーが見つかりません", status: "error" } );
        }

        // axios
        //     .post("/api/login")
    }, [] );
    return { login };
}
