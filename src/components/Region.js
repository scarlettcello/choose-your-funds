import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

function Region ({showResult, prevStep, handleChange, populatePage}) {
  useEffect(() => {populatePage();}, []);

  const result = e => {
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    if (selected.length < 1) {
      toast.error('Please select the region.')
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
      <div className="options region">
        <label htmlFor='canada'>
          <input type="radio" id="canada" name="region" value="Canada" onChange={handleChange('region')}/>
          <span>Canada</span>
        </label>
        <label htmlFor="us">
          <input type="radio" id="us" name="region" value="US" onChange={handleChange('region')}/>
          <span>US</span>
        </label>
        <label htmlFor="north-america">
          <input type="radio" id="north-america" name="region" value="North America" onChange={handleChange('region')}/>
          <span>North America</span>
        </label>
        <label htmlFor='europe'>
          <input type="radio" id="europe" name="region" value="Europe" onChange={handleChange('region')}/>
          <span>Europe</span>
        </label>
        <label htmlFor='emerging'>
          <input type="radio" id="emerging" name="region" value="Emerging" onChange={handleChange('region')}/>
          <span>Emerging</span>
        </label>
        <label htmlFor='asia-pacific'>
          <input type="radio" id="asia-pacific" name="region" value="Asia-Pacific" onChange={handleChange('region')}/>
          <span>Asia Pacific</span>
        </label>
        <label htmlFor='global'>
          <input type="radio" id="global" name="region" value="Global" onChange={handleChange('region')}/>
          <span>Global</span>
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