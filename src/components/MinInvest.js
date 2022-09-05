import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

function MinInvest ({nextStep, prevStep, handleChange, populatePage}) {
  useEffect(() => {populatePage();}, []);

  const next = e => {
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    if (selected.length < 1) {
      toast.error('Please select your answer')
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
      <h1></h1>
      <div className="options">
        <label htmlFor="min-none">
          <input type="radio" id="min-none" name="minInvest" value="None" onChange={handleChange('minInvest')}/>
          No minimum
        </label>
        <label htmlFor="min-500">
          <input type="radio" id="min-500" name="minInvest" value="500" onChange={handleChange('minInvest')}/>
          At least $500
        </label>
      </div>
      <p></p>
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

export default MinInvest