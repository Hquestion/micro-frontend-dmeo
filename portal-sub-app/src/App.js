import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';

function App() {
  return (
    <div className="portal-App">
      <header className="portal-App-header">
        <img src={logo} className="portal-App-logo" alt="logo" />
        <section>
          <Router>
            <div>

              <Link to={'/'}>Home</Link>
              <Link to={'/recommend'}>Recommend</Link>
              <Link to={'/about'}>About</Link>
              <Link to={'/Mine'}>Mine</Link>
            </div>
            <article>
              <Switch>
                <Route path="/recommend">Recommend</Route>
                <Route path="/about">About</Route>
                <Route path="/mine">Mine</Route>
                <Route path="/">Initial Home</Route>
              </Switch>
            </article>
          </Router>
        </section>
      </header>
    </div>
  );
}

export default App;
