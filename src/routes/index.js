import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from "../pages/Login";
import Chat from "../pages/Chat";
import Register from "../pages/Register";

export default function Routes() {

    const Rota = ({ path: Path, component: Component, ...rest }) => (
        <Route Path render={props => (
            <Component {...props} {...rest}/>
        )}/>
    )

    return (
        <Router>
            <Switch>
                <Rota path="/" exact component={Login} />
                <Rota path="/chat" component={Chat} />
                <Rota path="/register" component={Register} />
            </Switch>
        </Router>
    );
}