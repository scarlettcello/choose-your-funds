import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

function Managed ({nextStep, prevStep, handleChange, populatePage}) {
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
        <label htmlFor="managed">
        <input type="radio" id="managed" name="managed" value="true" onChange={handleChange('managed')} />Active Management
        </label>
        <label htmlFor="unmanaged">
        <input type="radio" id="unmanaged" name="managed" value="false" onChange={handleChange('managed')}/>Passive Management
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

export default Managed;