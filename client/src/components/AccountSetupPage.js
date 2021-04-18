import '../styles/App.css';
import '../styles/Setup.css';
import React, { useState } from 'react';
import Header from './Header.js';

function AccountSetUpPage(props) {
  const [stepNum, setStepNum] = useState(0);
  const [tagList, setTagList] = useState([]);
  const [gameList, setGameList] = useState([]);

  const stepComponents = [
    <TagChecklist handleCheckboxChange={updateTags} />,
    <GamesChecklist handleCheckboxChange={updateGames} />
  ];

  // Stub, logic for what to do if a certain checkbox has been checked
  // Probably change label in args here to something easier to parse
  function updateTags(tagId) {
    setTagList(tagList.concat([tagId]));
  }

  function updateGames(gameId) {
    setGameList(gameList.concat([gameId]));
  }

  function finalizeTags() {
    return;
  }

  function finalizeGames() {
    return;
  }

  return (
    <div className="App">
      <Header isSignedIn={props.isSignedIn} />
      <div className="setup-container">
        {(stepNum < stepComponents.length)
          ? <NextStep 
              stepComponents={stepComponents}
              stepNum={stepNum}
              setStepNum={setStepNum}
            />
          : <FinishedScreen />
        }
      </div>
    </div>
  );
}

function NextStep(props) {
  const { stepNum, setStepNum, stepComponents } = props;

  return (
    <div className="setup-container">
      {(stepNum < stepComponents.length) &&
        <h3>Set up your account in just a few easy steps!</h3>}
        {stepComponents[stepNum]}

        <div className="button-list">
          {(stepNum < stepComponents.length - 1) && 
            <button onClick={() => setStepNum(stepNum + 1)}>Next</button>}
          {(stepNum === stepComponents.length - 1) && 
            <button onClick={() => setStepNum(stepNum + 1)}>Finish</button>}
          {(stepNum < stepComponents.length) && 
            <button onClick={() => setStepNum(stepNum + 1)}>Skip</button>}
        </div>
    </div>
  );
}

function FinishedScreen(props) {
  return (
    <div>
      <h3>You're done!</h3>
      <p>You can always edit your information on your portfolio.</p>
      <button>View your portfolio</button>
    </div>
  );
}

function GameQuestions(props) {
  return (
    <React.Fragment />
  );
}

function GamesChecklist(props) {
  return (
    <div className="checkbox-list">
      <p>Next, which of the following games do you play?</p>
      <p>For each game you select, you'll have a separate tab on your portfolio.</p>
      <Checkbox 
        label="League of Legends"
        boxId={0}
        handleCheckboxChange={props.handleCheckboxChange}  
      />
      <Checkbox 
        label="VALORANT"
        boxId={1}
        handleCheckboxChange={props.handleCheckboxChange}  
      />
      <Checkbox 
        label="Overwatch"
        boxId={2}
        handleCheckboxChange={props.handleCheckboxChange}  
      />
    </div>
  );
}

function TagChecklist(props) {
  return (
    <div className="checkbox-list">
      <p>Please check which of the following options apply to you:</p>
      <Checkbox 
        label="I am a professional gamer open for recruitment"
        boxId={0}
        handleCheckboxChange={props.handleCheckboxChange}  
      />
      <Checkbox 
        label="I am a professional gamer, but not currently open for recruitment"
        boxId={1}
        handleCheckboxChange={props.handleCheckboxChange}  
      />
      <Checkbox 
        label="I am an eSports team manager"
        boxId={2}
        handleCheckboxChange={props.handleCheckboxChange}  
      />
      <Checkbox 
        label="I am an eSports industry professional"
        boxId={3}
        handleCheckboxChange={props.handleCheckboxChange}  
      />
      <Checkbox 
        label="I am a non-professional gamer"
        boxId={4}
        handleCheckboxChange={props.handleCheckboxChange}  
      />
      <Checkbox 
        label="I am an eSports fan"
        boxId={5}
        handleCheckboxChange={props.handleCheckboxChange}  
      />
    </div>
  );
}

function Checkbox(props) {
  const [isChecked, setIsChecked] = useState(false);

  function toggleCheckbox() {
    setIsChecked(!isChecked);
    props.handleCheckboxChange(props.boxId);
  }

  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        {props.label}
      </label>
    </div>
  )
}

export default AccountSetUpPage;