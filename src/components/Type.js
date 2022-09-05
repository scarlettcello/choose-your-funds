import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

function Type ({nextStep, prevStep, handleChange, populatePage}) {
  useEffect(() => {populatePage();}, []);

  const next = e =>{  
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    if (selected.length < 1) {
      toast.error('Please select one.')
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
        <label htmlFor="equity">
          <input type="radio" id="equity" name="type" value="Equity" onChange={handleChange('type')} />Equity
        </label>
        <label htmlFor="fixed-income">
          <input type="radio" id="fixed-income" name="type" value="Fixed Income" onChange={handleChange('type')}/>Fixed Income
        </label>
        <label htmlFor="balanced">
          <input type="radio" id="balanced" name="type" value="Balanced" onChange={handleChange('type')}/>Balanced
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
  )
}

export default Type;