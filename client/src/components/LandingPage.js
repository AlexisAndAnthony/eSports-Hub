import '../styles/App.css';
import '../styles/LandingPage.css';
import Header from "./Header.js";

function LandingPage() {
    return (
      <div className="App">
          <Header />
          <div className="body">
            <div className="left-column">
              <div className="blurb">
                <h2>Something for everyone in the eSports Scene.</h2>
                <p>Regardless of whether you're a pro gamer, eSports staff,
                  casual gamer, or just an all-around fan, eSports Hub has
                  something for you.
                </p>
              </div>
              <GamesList />
            </div>
            <SitePreview />
          </div>
        </div>
    );
  }

  function GamesList() {
    return (
      <div className="games-box">
        <h3>SUPPORTED GAMES</h3>
        <p>League of Legends</p>
        <p>VALORANT</p>
        <p>Overwatch</p>
        <p>...with many more on the way!</p>
      </div>
    )
  }

  function SitePreview() {
    return (
      <div className="preview">
        <h3>FOR PROFESSIONAL & CASUAL GAMERS</h3>
        <div className="preview-box">
          <div className="img-temp"></div>
          <div className="preview-box-list">
            <p>Showcase your skills through a personalized portfolio</p>
            <p>Find other gamers to scrim against and team up with, as well
              as upcoming tournaments</p>
            <p>Connect with professionals in the eSports industry</p>
          </div>
        </div>
        <h3>FOR TEAM MANAGERS</h3>
        <div className="preview-box">
          <div className="img-temp"></div>
          <div className="preview-box-list">
            <p>Browse through a list of professional gamers open for
              recruitment</p>
            <p>Send professional messages back and forth through our chat system</p>
            <p>Connect with professionals in the eSports industry</p>
          </div>
        </div>
        <h3>FOR ESPORTS FANS</h3>
        <div className="preview-box">
          <div className="img-temp"></div>
          <div className="preview-box-list">
            <p>Stay up-to-date on the most recent eSports news</p>
            <p>Join or organize tournament watch parties with other eSports fans</p>
            <p>Utilize our portfolio system to track your personal gaming
              achievements</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default LandingPage;