import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, 
  faAnglesRight, 
  faLightbulb, 
  faGem, 
  faMicrochip,
  faIndustry,
  faCar,
  faMugHot,
  faUserDoctor,
  faCoins,
  faMobileAndroid,
  faPlug,
  faHouse,
  faMoneyBill,
  faBuilding,
  faLandmarkDome,
  faLandmarkFlag,
  faMoneyBillTransfer,
  } from '@fortawesome/free-solid-svg-icons';
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
        <div className="options-container sectors">
          <div className="options equity">
            <h2>Equity sectors</h2>
              <label htmlFor="all-eq" className="check-all">
                <input type="checkbox" id="all-eq" name="equitySectors" onChange={handleCheckboxAll('equitySectors')} value="All" />
                  <span>Select All</span>
              </label>
              <label htmlFor='energy'>
                <input type="checkbox" id="energy" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Energy"/>
                <FontAwesomeIcon icon={faLightbulb} /><span>Energy</span>
              </label>
              <label htmlFor='materials'>
                <input type="checkbox" id="materials"name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Materials"/>
                <FontAwesomeIcon icon={faGem} /><span>Materials</span>
              </label>
              <label htmlFor='info-tech'>
                <input type="checkbox" id="info-tech" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Information Technology"/>
                <FontAwesomeIcon icon={faMicrochip} /><span>Information Technology</span>
              </label>
              <label htmlFor='industrials'>
                <input type="checkbox" id="industrials" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Industrials"/>
                <FontAwesomeIcon icon={faIndustry} /><span>Industrials</span>
              </label>
              <label htmlFor='consumer-disc'>
                <input type="checkbox" id="consumer-disc" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Consumer Discretionary"/>
                <FontAwesomeIcon icon={faCar} /><span>Consumer Discretionary</span>
              </label>
              <label htmlFor='consumer-staples'>
                <input type="checkbox" id="consumer-staples" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Consumer Staples"/>
                <FontAwesomeIcon icon={faMugHot} /><span>Consumer Staples</span>
              </label>
              <label htmlFor='healthcare'>
                <input type="checkbox" id="healthcare" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Healthcare"/>
                <FontAwesomeIcon icon={faUserDoctor} /><span>Healthcare</span>
              </label>
              <label htmlFor='financials'>
                <input type="checkbox" id="financials" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Financials"/>
                <FontAwesomeIcon icon={faCoins} /><span>Financials<br/></span>
              </label>
              <label htmlFor='communication'>
                <input type="checkbox" id="communication" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Communication Services"/>
                <FontAwesomeIcon icon={faMobileAndroid} /><span>Communication Services</span>
              </label>
              <label htmlFor='utilities'>
                <input type="checkbox" id="utilities" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Utilities"/>
                <FontAwesomeIcon icon={faPlug} /><span>Utilities</span>
              </label>
              <label htmlFor='real-estate'>
                <input type="checkbox" id="real-estate" name="equitySectors" onChange={handleCheckbox('equitySectors')} value="Real Estate"/>
                <FontAwesomeIcon icon={faHouse} /><span>Real Estate</span>
              </label>
          </div>
            
          <div className="options fixed-income">
            <h2>Fixed Income sectors</h2>
            <label htmlFor="all-fi" className="check-all">
              <input type="checkbox" id="all-fi" name="fixedIncomeSectors" onChange={handleCheckboxAll('fixedIncomeSectors')} value="All" />
              <span>Select All</span>
            </label>
            <label htmlFor='cash'>
              <input type="checkbox" id="cash" name="fixedIncomeSectors" onChange={handleCheckbox('fixedIncomeSectors')} value="Cash"/>
              <FontAwesomeIcon icon={faMoneyBill} /><span>Cash and Cash Equivalents</span>
            </label>
            <label htmlFor='corporates'>
              <input type="checkbox" id="corporates" name="fixedIncomeSectors" onChange={handleCheckbox('fixedIncomeSectors')} value="Corporates"/>
              <FontAwesomeIcon icon={faBuilding} /><span>Corporates</span>
            </label>
            <label htmlFor='government'>
              <input type="checkbox" id="government" name="fixedIncomeSectors" onChange={handleCheckbox('fixedIncomeSectors')} value="Government"/>
              <FontAwesomeIcon icon={faLandmarkDome} /><span>Government</span>
            </label>
            <label htmlFor='municipals'>
              <input type="checkbox" id="municipals"name="fixedIncomeSectors" onChange={handleCheckbox('fixedIncomeSectors')} value="Municipals"/>
              <FontAwesomeIcon icon={faLandmarkFlag} /><span>Municipals</span>
            </label>
            <label htmlFor='securitized'>
              <input type="checkbox" id="securitized" name="fixedIncomeSectors" onChange={handleCheckbox('fixedIncomeSectors')} value="Securitized"/>
              <FontAwesomeIcon icon={faMoneyBillTransfer} /><span>Securitized</span>
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

export default Sector;