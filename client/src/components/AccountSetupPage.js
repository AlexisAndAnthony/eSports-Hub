import '../styles/App.css';
import '../styles/Setup.css';
import React, { useState } from 'react';
import Header from './Header.js';

function AccountSetUpPage(props) {
  const [stepNum, setStepNum] = useState(0);
  const [tagList, setTagList] = useState([]);
  const [gameList, setGameList] = useState([]);
  const [allowContinue, setAllowContinue] = useState(false);

  const stepComponents = [
    <StartPage handleCheckboxChange={updateTags} />,
    <GamesChecklist handleCheckboxChange={updateGames} />
  ];

  // Stub, logic for what to do if a certain checkbox has been checked
  // Probably change label in args here to something easier to parse
  function updateTags(tagId, isChecked) {
    if (isChecked) {
      setTagList(tagList.concat([tagId]));
      setAllowContinue(true);
    } else {
      var index = tagList.indexOf(tagId);
      setTagList(tagList.splice(index, 1));
      if (tagList.length === 0) {
        setAllowContinue(false);
      }
    }
  }

  function updateGames(gameId, isChecked) {
    if (isChecked) {
      setGameList(gameList.concat([gameId]));
      setAllowContinue(true);
    } else {
      var index = gameList.indexOf(gameId);
      setTagList(gameList.splice(index, 1));
      if (gameList.length === 0) {
        setAllowContinue(false);
      }
    }
  }

  function finalizeTags() {
    console.log('Finalizing tag selections...');
    setAllowContinue(false);
    tagList.forEach((tag) => {
      return;
    });
  }

  function finalizeGames() {
    console.log('Finalizing game selections...');
    setAllowContinue(false);
    var index = 2;
    gameList.forEach((gameId) => {
      stepComponents.splice(index, 0, <GameQuestions gameId={gameId}/>);
      index++;
    });
    console.log(stepComponents);
  }

  var onButtonClick = () => {};
  switch(stepNum) {
    case 0:
      onButtonClick = () => finalizeTags();
      break;
    case 1:
      onButtonClick = () => finalizeGames();
      break;
    default:
      break;
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
              allowContinue={allowContinue}
              onButtonClick={onButtonClick}
            />
          : <FinishedScreen />
        }
      </div>
    </div>
  );
}

function NextStep(props) {
  const { stepNum, stepComponents } = props;

  return (
    <div className="setup-container">
      {(stepNum < stepComponents.length) &&
        <h3>Set up your account in just a few easy steps!</h3>}
        {stepComponents[stepNum]}

        <div className="button-list">
          {(stepNum < stepComponents.length - 1) && 
            <ContinueButton label="Next" {...props} />}
          {(stepNum === stepComponents.length - 1) && 
            <ContinueButton label="Finish" {...props} />}
          {(stepNum < stepComponents.length) && 
            <ContinueButton label="Skip" {...props} allowContinue={true}/>}
        </div>
    </div>
  );
}

function ContinueButton(props) {
  console.log('Allow continue: ', props.allowContinue);
  var bg = !props.allowContinue ? "#8c8b82" : "#D4B300";
  return (
    <button 
      disabled={!props.allowContinue}
      onClick={() => {
        props.setStepNum(props.stepNum + 1);
        props.onButtonClick();
      }}
      style={{ backgroundColor: bg }}
    >
      {props.label}
    </button>
  )
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
  const gameIdToName = {
    0: 'League of Legends',
    1: 'VALORANT',
    2: 'Overwatch'
  }

  return (
    <div>
      <p>Time to answer some questions about your history with {gameIdToName[props.gameId]}.</p>
      <p>Feel free to skip any you don't want to answer right now - you can always add or remove info later.</p>
      <p>Enter your primary {gameIdToName[props.gameId]} account username.</p>
      <p>What region is your primary account in?</p>
      <p>What rank are you?</p>
    </div>
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

function StartPage(props) {
  const [displayName, setDisplayName] = useState("");
  const [pfpURL, setPfpURL] = useState("");

  return (
    <div className="option-list">
      <div className="input-group">
        <p>Please enter a display name.</p>
        <form>
          <label>
            <textarea 
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)} 
            />
          </label>
        </form>
      </div>
      <div className="input-group">
        <p>Please enter a profile picture URL.</p>
        <form>
          <label>
            <textarea 
              value={pfpURL}
              onChange={(event) => setPfpURL(event.target.value)} 
            />
          </label>
        </form>
      </div>
      <TagChecklist {...props} />
    </div>
  )
}

function TagChecklist(props) {
  return (
    <div>
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
    var checked = isChecked;
    setIsChecked(!checked);
    props.handleCheckboxChange(props.boxId, !checked);
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