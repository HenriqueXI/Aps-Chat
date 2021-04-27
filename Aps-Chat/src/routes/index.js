import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from "../pages/Login";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact >
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}