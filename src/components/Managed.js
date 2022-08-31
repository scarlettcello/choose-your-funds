import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

function Managed ({nextStep, prevStep, handleChange}) {
  const next = e =>{  
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
    <div className="container">
      <h1>Do you want your funds managed by professionals?</h1>
      <div className="options">
        <label htmlFor="managed">
        <input type="radio" id="managed" name="managed" value="true" onChange={handleChange('managed')} />Managed
        </label>
        <label htmlFor="unmanaged">
        <input type="radio" id="unmanaged" name="managed" value="false" onChange={handleChange('managed')}/>Unmanaged
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

export default Managed;