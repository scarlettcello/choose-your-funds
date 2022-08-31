import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

function Minimum ({nextStep, prevStep, handleChange}) {
  const next = e => {
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    if (selected.length < 1) {
      alert('Please select your answer')
    } else {
      nextStep();
    }
  }

  const back = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div className="container">
      <h1>How much would you like to invest initially?</h1>
      <div className="options">
        <label htmlFor="minimum-none">
          <input type="radio" id="minimum-none" name="minimum" value="none" onChange={handleChange('minimum')}/>
          No minimum
        </label>
        <label htmlFor="minimum-500">
          <input type="radio" id="minimum-500" name="minimum" value="500" onChange={handleChange('minimum')}/>
          At least $500
        </label>
      </div>
      <div className="steps">
        <div className="btn-area" onClick={back}>
          <FontAwesomeIcon icon={faAnglesLeft} className="secondary"/>
          <button className="secondary" label="prev">Back</button>
        </div>
        <div className="btn-area" onClick={next}>
          <button className="primary" label="next" >Next</button>
          <FontAwesomeIcon icon={faAnglesRight} className="primary" />
        </div>
      </div>
    </div>
  );
}

export default Minimum