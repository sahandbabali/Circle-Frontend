import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <div className=" container App">
            <Navbar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
