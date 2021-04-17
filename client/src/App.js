import './styles/App.css';

function App() {
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

function Header() {
  return (
    <header className="header">
      <div className="title-group">
        <h1>eSports Hub</h1>
        <p>Your one-stop-shop for eSports connections.</p>
      </div>
      <NavLinks />
      <SignInButton />
    </header>
  )
}

function NavLinks() {
  return (
    <div className="nav-bar">
      <p>PORTFOLIOS</p>
      <p>ESPORTS RECRUITMENT</p>
      <p>GROUPS & SCRIMS</p>
      <p>TOURNAMENTS</p>
    </div>
  )
}

function SignInButton() {
  return (
    <button className="sign-in-button">
      SIGN IN
    </button>
  )
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

export default App;
