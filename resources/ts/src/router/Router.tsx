import { Route, Switch, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { homeRoutes } from "./HomeRoutes";
import { HomeLayout } from "../components/templates/HomeLayout";
import { Page404 } from "../components/pages/Page404";
import { Login } from "../components/pages/Login";
import { loginState } from "../store/loginState";

export const Router = () => {
    const { isLogin } = useRecoilValue(loginState);
    return (
        <Switch>
            <Route
                path="/"
                render={({ match: { url } }) => (
                    <Switch>
                        <Route exact path={`${url}login`}>
                            <Login />
                        </Route>
                        {homeRoutes.map((route) => (
                            <Route
                                key={route.path}
                                exact={route.exact}
                                path={`${url}${route.path}`}
                            >
                                <Login />
                            </Route>
                        ))}
                    </Switch>
                )}
            />
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    );
};
