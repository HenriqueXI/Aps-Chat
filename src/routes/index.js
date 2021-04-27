import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from "../pages/Login";
import Chat from "../pages/Chat";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact >
                    <Login />
                </Route>
                <Route path='/chat' exact >
                    <Chat />
                </Route>
            </Switch>
        </Router>
    );
}