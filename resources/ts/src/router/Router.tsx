import { Route, Switch } from "react-router-dom";

import { homeRoutes } from "./HomeRoutes";
import { HomeLayout } from "../components/templates/HomeLayout";
import { Page404 } from "../components/pages/Page404";
import { Login } from "../components/pages/Login";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                <HomeLayout>{route.children}</HomeLayout>
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
