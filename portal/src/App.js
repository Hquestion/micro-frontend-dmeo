import logo from './logo.svg';
import './App.css';
import Login from './Login'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
    const [loginVisible, setLoginVisible] = useState(false);

    function handleClick(type) {
        window.history.pushState({}, '', `/app-${type}`);
    }

    function handleLogin() {
        setLoginVisible(true);
    }
  return (
      <Router>
        <div className="portal-App">
          <header className="portal-App-header">
            <img src={logo} className="portal-App-logo" alt="logo" />
            <Link to={"/app-react"}>打开React应用</Link>
              <Link to={"/app-vue"}>打开Vue应用</Link>
              <Link to={"/home"}>Home</Link>
              <a onClick={() => {handleLogin()}}>Login</a>

          </header>
            <Switch>
                <Route path="/app-react">
                    <div id="portal-container">
                        // TODO
                    </div>
                </Route>
                <Route path="/app-vue">
                    <div id="portal-container">
                        // TODO
                    </div>
                </Route>
                <Route path="/home">
                    Home
                </Route>
            </Switch>
            <div className="portal-app-footer">
                版权所有&copy;PATEO
            </div>
            <div className={"modal " + (loginVisible ? 'visible' : '')}>
                <Login onLoginSuccess={() => setLoginVisible(false)} />
            </div>
        </div>
      </Router>
  );
}

export default App;
