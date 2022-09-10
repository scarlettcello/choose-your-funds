import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

function Volatility ({nextStep, prevStep, handleChange, populatePage}) {
  useEffect(() => {populatePage();}, []);

  const next = e => {
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
    <div className='container'>
      <h1>How much volatility can you tolerate?</h1>
      <div className="options-container">
        <div className="bar"></div>
        <div className="options volatility">
          <label htmlFor="low">
            <input type="radio" id="low" name="volatility" value="Low" 
            onChange={handleChange('volatility')}/><span>Low</span>
          </label>
          <label htmlFor="low-med">
            <input type="radio" id="low-med" name="volatility" value="Low-medium" 
            onChange={handleChange('volatility')}/><span>Low-med</span>
          </label>
          <label htmlFor='med'>
            <input type="radio" id="med" name="volatility" value="Medium" 
            onChange={handleChange('volatility')}/><span>Med</span>
          </label>
          <label htmlFor='med-high'>
            <input type="radio" id="med-high" name="volatility" value="Medium-high" 
            onChange={handleChange('volatility')}/><span>Med-high</span>
          </label>
          <label htmlFor='high'>
            <input type="radio" id="high" name="volatility" value="High" 
            onChange={handleChange('volatility')}/><span>High</span>
          </label>
        </div>
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
  )
}

export default Volatility;