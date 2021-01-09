import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../Auth/Login";
import DashRoutes from "./DashRoutes";

export default function Router() {
  return (
    <Switch>
      <Route path='/' exact>
        <Redirect to={{ pathname: "/dash/home" }} />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/dash'>
        <DashRoutes />
      </Route>
    </Switch>
  );
}
