import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

function Sector ({nextStep, prevStep, formValue, handleCheckbox, handleCheckboxAll, populatePage}) {
  useEffect(() => {populatePage();}, []);

  const next = e => {
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    let selectedEq = document.querySelectorAll('input[name=equitySectors]:checked');
    let selectedFI = document.querySelectorAll('input[name=fixedIncomeSectors]:checked');

    if (type === 'Equity' || type === 'Fixed Income') {
      if (selected.length < 1) {
        toast.error('Please select at least one sector.')
      } else {
        nextStep();
      }
    }

    if (type === 'Balanced') {
      if (selectedEq.length < 1 || selectedFI.length < 1) {
        toast.error('Please select at least one from each type');
      } else {
        nextStep()
      } 
    }
  }

  const back = e => {
    e.preventDefault();
    prevStep();
  }

  const {type} = formValue;

  useEffect(() => {
    if (type === 'Equity') {
      const element = document.querySelector('.fixed-income');
      element.style.display = 'none';
    } else if (type === 'Fixed Income') {
      const element = document.querySelector('.equity');
      element.style.display = 'none';
    }
  }, [type])

  return (
    <div className="container">
      <h1>In which sector(s) would you like to invest? (Select all you want)</h1>

      <div className="options equity">
        <h2>Equity sectors</h2>
        <label htmlFor="all-eq" className="check-all">
          <input type="checkbox" id="all-eq" name="equitySectors" onChange={handleCheckboxAll('equitySectors')} value="All" />Select All
        </label>
        <label htmlFor='energy'>
          <input type="checkbox" id="energy" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Energy"/>Energy
        </label>
        <label htmlFor='materials'>
          <input type="checkbox" id="materials"name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Materials"/>Materials
        </label>
        <label htmlFor='info-tech'>
          <input type="checkbox" id="info-tech" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Information Technology"/>Information Technology
        </label>
        <label htmlFor='industrials'>
          <input type="checkbox" id="industrials" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Industrials"/>Industrials
        </label>
        <label htmlFor='consumer-disc'>
          <input type="checkbox" id="consumer-disc" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Consumer Discretionary"/>Consumer Discretionary
        </label>
        <label htmlFor='consumer-staples'>
          <input type="checkbox" id="consumer-staples" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Consumer Staples"/>Consumer Staples
        </label>
        <label htmlFor='healthcare'>
          <input type="checkbox" id="healthcare" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Healthcare"/>Healthcare
        </label>
        <label htmlFor='financials'>
          <input type="checkbox" id="financials" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Financials"/>Financials<br/>
        </label>
        <label htmlFor='communication'>
          <input type="checkbox" id="communication" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Communication Services"/>Communication Services
        </label>
        <label htmlFor='utilities'>
          <input type="checkbox" id="utilities" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Utilities"/>Utilities
        </label>
        <label htmlFor='real-estate'>
          <input type="checkbox" id="real-estate" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Real Estate"/>Real Estate
        </label>
      </div>

      <div className="options fixed-income">
        <h2>Fixed Income sectors</h2>
        <label htmlFor="all-fi" className="check-all">
          <input type="checkbox" id="all-fi" name="fixedIncomeSectors" onChange={handleCheckboxAll('fixedIncomeSectors')} value="All" />Select All
        </label>
        <label htmlFor='cash'>
          <input type="checkbox" id="cash" name="fixedIncomeSectors" onChange={handleCheckbox('fixedIncomeSectors')} value="Cash"/>Cash and Cash Equivalents
        </label>
        <label htmlFor='corporates'>
          <input type="checkbox" id="corporates" name="fixedIncomeSectors" onChange={handleCheckbox('fixedIncomeSectors')} value="Corporates"/>Corporates
        </label>
        <label htmlFor='government'>
          <input type="checkbox" id="government" name="fixedIncomeSectors" onChange={handleCheckbox('fixedIncomeSectors')} value="Government"/>Government
        </label>
        <label htmlFor='municipals'>
          <input type="checkbox" id="municipals"name="fixedIncomeSectors" onChange={handleCheckbox('fixedIncomeSectors')} value="Municipals"/>Municipals
        </label>
        <label htmlFor='securitized'>
          <input type="checkbox" id="securitized" name="fixedIncomeSectors" onChange={handleCheckbox('fixedIncomeSectors')} value="Securitized"/>Securitized
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