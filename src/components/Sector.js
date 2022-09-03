import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

function Sector ({nextStep, prevStep, formValue, handleCheckbox, handleCheckboxAll}) {
  const next = e => {
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    if (selected.length < 1) {
      alert('Please select at least one sector.')
    } else {
      nextStep();
    }
  }

  const back = e => {
    e.preventDefault();
    prevStep();
  }

  const {type} = formValue;
  console.log(type);

  useEffect(() => {
    if (type === 'Equity') {
      const element = document.querySelector('.fixed-income');
      element.style.display = 'none';
    } else if (type === 'Fixed Income') {
      const element = document.querySelector('.equity');
      element.style.display = 'none';
    }
  }, [])

  return (
    <div className="container">
      <h1>In which sector would you like to invest? (Select all you want)</h1>

      <div className="options equity">
        <h2>Equity sectors</h2>
        <label htmlFor="all" className="check-all">
          <input type="checkbox" id="all" name="sector" onChange={handleCheckboxAll('sector')} value="All" />Select All
        </label>
        <label htmlFor='energy'>
          <input type="checkbox" id="energy" name="sector" onChange={handleCheckbox('sector')} value="Energy"/>Energy
        </label>
        <label htmlFor='materials'>
          <input type="checkbox" id="materials"name="sector" onChange={handleCheckbox('sector')} value="Materials"/>Materials
        </label>
        <label htmlFor='info-tech'>
          <input type="checkbox" id="info-tech" name="sector" onChange={handleCheckbox('sector')} value="Information Technology"/>Information Technology
        </label>
        <label htmlFor='industrials'>
          <input type="checkbox" id="industrials" name="sector" onChange={handleCheckbox('sector')} value="Industrials"/>Industrials
        </label>
        <label htmlFor='consumer-disc'>
          <input type="checkbox" id="consumer-disc" name="sector" onChange={handleCheckbox('sector')} value="Consumer Discretionary"/>Consumer Discretionary
        </label>
        <label htmlFor='consumer-staples'>
          <input type="checkbox" id="consumer-staples" name="sector" onChange={handleCheckbox('sector')} value="Consumer Staples"/>Consumer Staples
        </label>
        <label htmlFor='healthcare'>
          <input type="checkbox" id="healthcare" name="sector" onChange={handleCheckbox('sector')} value="Healthcare"/>Healthcare
        </label>
        <label htmlFor='financials'>
          <input type="checkbox" id="financials" name="sector" onChange={handleCheckbox('sector')} value="Financials"/>Financials<br/>
        </label>
        <label htmlFor='telecome'>
          <input type="checkbox" id="telecom" name="sector" onChange={handleCheckbox('sector')} value="Telecom"/>Telecommunication Services
        </label>
        <label htmlFor='utilities'>
          <input type="checkbox" id="utilities" name="sector" onChange={handleCheckbox('sector')} value="Utilities"/>Utilities
        </label>
        <label htmlFor='real-estate'>
          <input type="checkbox" id="real-estate" name="sector" onChange={handleCheckbox('sector')} value="Real Estate"/>Real Estate
        </label>
      </div>

      <div className="options fixed-income">
        <h2>Fixed Income sectors</h2>
        <label htmlFor="all" className="check-all">
          <input type="checkbox" id="all" name="sector" onChange={handleCheckboxAll('sector')} value="All" />Select All
        </label>
        <label htmlFor='securitized'>
          <input type="checkbox" id="securitized" name="sector" onChange={handleCheckbox('sector')} value="Energy"/>Securitized
        </label>
        <label htmlFor='municipals'>
          <input type="checkbox" id="municipals"name="sector" onChange={handleCheckbox('sector')} value="Materials"/>Municipals
        </label>
        <label htmlFor='government'>
          <input type="checkbox" id="government" name="sector" onChange={handleCheckbox('sector')} value="Government"/>Government
        </label>
        <label htmlFor='corporates'>
          <input type="checkbox" id="corporates" name="sector" onChange={handleCheckbox('sector')} value="corporates"/>Corporates
        </label>
        <label htmlFor='cash'>
          <input type="checkbox" id="cash" name="sector" onChange={handleCheckbox('sector')} value="Cash"/>Cash and Cash Equivalents
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

export default Sector;