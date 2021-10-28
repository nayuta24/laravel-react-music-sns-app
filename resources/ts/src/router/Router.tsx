import { Route, Switch, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { homeRoutes } from "./HomeRoutes";
import { HomeLayout } from "../components/templates/HomeLayout";
import { Page404 } from "../components/pages/Page404";
import { Login } from "../components/pages/Login";
import { loginState } from "../store/loginState";
import { AuthGuard } from "./auth_route/AuthGuard";

export const Router = () => {
    const { isLogin } = useRecoilValue(loginState);
    return (
        <Switch>
            <Route exact path="/login">
                {/* ログイン済の場合はトップページにリダイレクトされる */}
                {isLogin ? <Redirect to="/" /> : <Login />}
            </Route>
            {/* 未ログインの場合は「AuthGuard」によってログイン画面へリダイレクトされる */}
            {/* <AuthGuard> */}
            <HomeLayout>
                <Switch>
                    <Route
                        path="/"
                        render={({ match: { url } }) => (
                            <Switch>
                                {homeRoutes.map((route) => (
                                    <Route
                                        key={route.path}
                                        exact={route.exact}
                                        path={`${url}${route.path}`}
                                    >
                                        {route.children}
                                    </Route>
                                ))}
                            </Switch>
                        )}
                    />
                </Switch>
            </HomeLayout>
            {/* </AuthGuard> */}
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    );
};
