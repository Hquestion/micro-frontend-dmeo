import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from "react-redux";

import logo from './logo2.svg';
import './App.css';

function App(props) {
  const { username } = props;
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>当前用户: {username ? username : '未登陆'}</div>
      <Router basename={window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/'}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function mapStateToProps(state) {
  const { username } = state;
  return { username };
}

export default connect(mapStateToProps)(App);


