import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

function Region ({showResult, prevStep, handleChange}) {
  const result = e => {
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    if (selected.length < 1) {
      alert('Please select the region.')
    } else {
      showResult();
    }
  }

  const back = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div className='container'>
      <h1>Which region of the globe would you like to invest?</h1>
      <div className="options">
        <label htmlFor='canada'>
          <input type="radio" id="canada" name="region" value="Canada" onChange={handleChange('region')}/>Canada
        </label>
        <label htmlFor="us">
          <input type="radio" id="us" name="region" value="US" onChange={handleChange('region')}/>US
        </label>
        <label htmlFor='europe'>
          <input type="radio" id="europe" name="region" value="Europe" onChange={handleChange('region')}/>Europe
        </label>
        <label htmlFor='emerging'>
          <input type="radio" id="emerging" name="region" value="Emerging" onChange={handleChange('region')}/>Emerging
        </label>
        <label htmlFor='asia-pacific'>
          <input type="radio" id="asia-pacific" name="region" value="Asia-Pacific" onChange={handleChange('region')}/>Asia Pacific
        </label>
        <label htmlFor='global'>
          <input type="radio" id="global" name="region" value="Global" onChange={handleChange('region')}/>Global
        </label>     
      </div>        
      <div className="steps">
        <div className="btn-area" onClick={back}>
          <FontAwesomeIcon icon={faAnglesLeft} className="secondary"/>
          <button className="secondary" label="prev">Back</button>
        </div>
        <div className="btn-area" onClick={result}>
          <button className="primary" label="finish" >Finish</button>
          <FontAwesomeIcon icon={faAnglesRight} className="primary" />
        </div>
      </div>      
    </div>
  );
}

export default Region;