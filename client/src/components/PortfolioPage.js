import '../styles/App.css';
import { useState, useEffect } from 'react';
import Header from './Header.js';
import axios from 'axios';

function PortfolioPage(props) {
  const [portfolios, setPortfolios] = useState([]);
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    getPortfolios()
      .then(portfolios => {
        setPortfolios(portfolios);
      })
      .catch(err => {
        console.log(err);
        setDisplayError(true);
      });
  }, []);

  return (
    <div className="App">
      <Header isSignedIn={props.isSignedIn} /> 
      <div className="feed-container">
        <div className="feed-display">
          {!displayError
          ? (
            <PortfolioView portfolios={portfolios} />
          ) 
          : (
            <p>Sorry, there was an error retrieving the latest posts.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function PortfolioView(props) {
  return (
    <div className="portfolio-list">
      {Array.isArray(props.portfolios) && props.portfolios.map((portfolio) => (
        <PortfolioEntry
        />
      ))}
    </div>
  )
}

function PortfolioEntry(props) {
  return (
    <div className="portfolio-row">
      <p>Test</p>
    </div>
  )
}

// Retrieve list of portfolios from API
async function getPortfolios() {
  return axios.get('http://localhost:8080/api/portfolios')
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export default PortfolioPage;