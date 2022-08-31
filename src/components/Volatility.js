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
          <input type="radio" id="low" name="volatility" value="low" onChange={handleChange('volatility')}/>Less than 10%
        </label>
        <label htmlFor='medium'>
          <input type="radio" id="medium" name="volatility" value="medium" onChange={handleChange('volatility')}/>Between 10% and 20%
        </label>
        <label htmlFor='high'>
          <input type="radio" id="high" name="volatility" value="high" onChange={handleChange('volatility')}/>More than 20%
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