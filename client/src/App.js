import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './components/LandingPage.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/portfolios">
          {}
        </Route>
        <Route path="/recruitment">
          {}
        </Route>
        <Route path="/groups">
          {}
        </Route>
        <Route path="/tournaments">
          {}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
