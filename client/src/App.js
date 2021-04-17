import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './components/LandingPage.js';
import SignUpPage from './components/SignUpPage.js';
import PortfolioList from './components/PortfolioList.js';
import RecruitmentPage from './components/RecruitmentPage.js';
import GroupList from './components/GroupList.js';
import TournamentList from './components/TournamentList.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/portfolios">
          <PortfolioList />
        </Route>
        <Route path="/recruitment">
          <RecruitmentPage />
        </Route>
        <Route path="/groups">
          <GroupList />
        </Route>
        <Route path="/tournaments">
          <TournamentList />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
