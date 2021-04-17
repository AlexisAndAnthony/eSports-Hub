import '../styles/App.css';
import Header from './Header.js';

function AccountSetUpPage(props) {
  // Stub, logic for what to do if a certain checkbox has been checked
  // Probably change label in args here to something easier to parse
  function handleCheckboxChange(label) {
    return;
  }

  return (
    <div className="App">
      <Header isSignedIn={props.isSignedIn} />
      <h3>Set up your account in just a few easy steps!</h3>
      <Checkbox 
        label="I am a professional gamer open for recruitment"
        handleCheckboxChange={handleCheckboxChange}  
      />
      <Checkbox 
        label="I am a professional gamer, but not currently open for recruitment"
        handleCheckboxChange={handleCheckboxChange}  
      />
      <Checkbox 
        label="I am an eSports team manager"
        handleCheckboxChange={handleCheckboxChange}  
      />
      <Checkbox 
        label="I am an eSports industry professional"
        handleCheckboxChange={handleCheckboxChange}  
      />
      <Checkbox 
        label="I am a non-professional gamer"
        handleCheckboxChange={handleCheckboxChange}  
      />
    </div>
  );
}

function Checkbox(props) {
  const [isChecked, setIsChecked] = this.useState(false);

  function toggleCheckbox() {
    setIsChecked(!isChecked);
    props.handleCheckboxChange(label);
  }

  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          value={props.label}
          checked={isChecked}
          onChange={toggleCheckbox}
        />
      </label>
    </div>
  )
}

export default AccountSetUpPage;