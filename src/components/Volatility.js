import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

function Volatility ({nextStep, prevStep, handleChange}) {
  const next = e => {
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    if (selected.length < 1) {
      alert('Please select one.')
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
      <div className="options">
        <label htmlFor="low">
          <input type="radio" id="low" name="volatility" value="Low" 
          onChange={handleChange('volatility')}/>Low
        </label>
        <label htmlFor="low-med">
          <input type="radio" id="low-med" name="volatility" value="Low-medium" 
          onChange={handleChange('volatility')}/>Low to Medium
        </label>
        <label htmlFor='med'>
          <input type="radio" id="med" name="volatility" value="Medium" 
          onChange={handleChange('volatility')}/>Medium
        </label>
        <label htmlFor='med-high'>
          <input type="radio" id="med-high" name="volatility" value="Medium-high" 
          onChange={handleChange('volatility')}/>Medium to High
        </label>
        <label htmlFor='high'>
          <input type="radio" id="high" name="volatility" value="High" 
          onChange={handleChange('volatility')}/>High
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
  )
}

export default Volatility;