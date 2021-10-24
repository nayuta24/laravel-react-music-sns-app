import { memo, ReactNode, VFC } from "react";
import { Redirect } from "react-router";
import { useRecoilValue } from "recoil";
import { loginState } from "../../store/loginState";

type Props = {
    children: ReactNode;
};

export const AuthGuard: VFC<Props> = memo((props) => {
    const { children } = props;
    const { isLogin } = useRecoilValue(loginState);

    return isLogin ? <>{children}</> : <Redirect to="/login" />;
});
