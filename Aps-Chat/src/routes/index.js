import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/register";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact >
                    <Login />
                </Route>

                <Route path='/register' exact>
                    <Register />
                </Route>
            </Switch>
        </Router>
    );
}
