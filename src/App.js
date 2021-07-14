import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Register/register.js";
import Login from "./Login/login.js";
import Home from "./Home/home.js";
import ProtectedRoute from "./ProtectedRoute.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/home" component={Home} />
	  </Switch>
    </Router>
  );
}

export default App;
