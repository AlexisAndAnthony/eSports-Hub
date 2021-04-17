import './styles/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './components/LandingPage.js';
import SignUpPage from './components/SignUpPage.js';
import FeedPage from './components/FeedPage.js';
import PortfolioPage from './components/PortfolioPage.js';
import RecruitmentPage from './components/RecruitmentPage.js';
import GroupPage from './components/GroupPage.js';
import TournamentPage from './components/TournamentPage.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/feed">
          <FeedPage />
        </Route>
        <Route path="/portfolios">
          <PortfolioPage />
        </Route>
        <Route path="/recruitment">
          <RecruitmentPage />
        </Route>
        <Route path="/groups">
          <GroupPage />
        </Route>
        <Route path="/tournaments">
          <TournamentPage />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
