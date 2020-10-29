import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Shop from './containers/Shop/Shop';
import Login from './containers/Login/Login';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
  );
}

export default App;
