import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {Login, SignUp} from "./pages/auth/";
import {Home} from "./pages/home";
import {UploadPage} from "./pages/products";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/"
                        component={Home}/>
                    <Route exact path="/auth/login/"
                        component={Login}/>
                    <Route exact path="/auth/register/"
                        component={SignUp}/>
                    <Route exact path="/products/upload/"
                        component={UploadPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
