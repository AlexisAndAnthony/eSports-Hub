import './styles/App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './components/LandingPage.js';
import SignUpPage from './components/SignUpPage.js';
import AccountSetUpPage from './components/AccountSetupPage.js';
import FeedPage from './components/FeedPage.js';
import PortfolioPage from './components/PortfolioPage.js';
import RecruitmentPage from './components/RecruitmentPage.js';
import GroupPage from './components/GroupPage.js';
import TournamentPage from './components/TournamentPage.js';

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <SignUpPage 
            isSignedIn={isSignedIn}
            updateLogin={(isSignedIn) => setIsSignedIn(isSignedIn)}
          />
        </Route>
        <Route path="/setup">
          <AccountSetUpPage
            isSignedIn={isSignedIn}
          />
        </Route>
        <Route path="/feed">
          <FeedPage isSignedIn={isSignedIn} />
        </Route>
        <Route path="/portfolios">
          <PortfolioPage isSignedIn={isSignedIn} />
        </Route>
        <Route path="/recruitment">
          <RecruitmentPage isSignedIn={isSignedIn} />
        </Route>
        <Route path="/groups">
          <GroupPage isSignedIn={isSignedIn} />
        </Route>
        <Route path="/tournaments">
          <TournamentPage isSignedIn={isSignedIn} />
        </Route>
        <Route path="/">
          <LandingPage isSignedIn={isSignedIn} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
