import { useState } from 'react';
import Start from './Start';
import MinInvest from './MinInvest';
import Managed from './Managed';
import Type from './Type';
import Volatility from './Volatility';
import Sector from './Sector';
import Region from './Region';
import Result from './Result';

function Form ({fundsData}) {
  const [formValue, setFormValue] = useState({
    step: 0,
    minInvest: "",
    managed: true,
    type: "",
    volatility: 0,
    sector: [],
    region: '',
    yourFunds: {}
  });

  let {step, minInvest, managed, type, volatility, sector, region} = formValue;

  const nextStep = () => {
    setFormValue((prevState) => {
      return {
        ...prevState,
        step: step + 1
      }
    });
  }

  const prevStep = () => {
    setFormValue((prevState) => {
      return {
        ...prevState,
        step: step - 1
      }
    });
  }

  const startOver = e => {
    setFormValue((prevState) => {
      return {
        ...prevState,
        step: step - 7
      }
    });
  }

  const showResult = () => {
    nextStep();
    const funds = fundsData;
    let managedState = managed; 
    let isManaged = (managedState === "true"); //convert string to boolean
    let yourFunds = fundsFilteredBySectors(funds, sector);
    yourFunds = yourFunds
      .filter(el => el.minInvest === minInvest)
      .filter(el => el.managed === isManaged)
      .filter(el => el.type === type)
      .filter(el => el.volatility === volatility)
      .filter(el => el.region === region);

    setFormValue((prevState) => {
      return { 
        ...prevState,
        yourFunds,
      }
    });
  }

  const fundsFilteredBySectors = (sectors, selectedSectors) => {
    let matchedSectors = [];

    for (let i = 0; i < sectors.length; i++) { //11 sectors
      let fundSector = sectors[i].sector;
      selectedSectors.forEach(el => {
        if (el === fundSector) {
          return matchedSectors.push(sectors[i].linkedFrom.fundCollection.items);
        }
      });
    }
    const finalArray = matchedSectors.flat();
    let uniqueFunds = finalArray.reduce((unique, obj) => {
      if (!unique.some(el => el.fundCode === obj.fundCode)) {
        unique.push(obj);
      }
      return unique
    }, []);

    return uniqueFunds;
  }

  const handleChange = input => e => {
    setFormValue((prevState) => {
      return {
        ...prevState,
        [input]: e.target.value
      }
    });
  
    let options = document.querySelectorAll('input[type=radio]');
    options.forEach(el => {
      if (el.checked) {
        el.parentNode.classList.add('is-checked');
      } else {
        el.parentNode.classList.remove('is-checked');
      }
    });
  }

  const handleCheckboxAll = input => e => {
    const checkAll = document.getElementById('all');
    let options = document.querySelectorAll('input[type=checkbox]');

    checkAll.checked ? options.forEach(el => el.checked = true) : options.forEach(el => el.checked = false);

    options.forEach(el => {
      if (el.checked ) {
        el.parentNode.classList.add('is-checked');
      } else {
        el.parentNode.classList.remove('is-checked');
      }
    });

    if (options.checked < options.length) {
      checkAll.checked = false;
    }

    let checked = document.querySelectorAll('input:checked');
    let values = [];

    checked.forEach(el => {
      values.push(el.value);
    });

    setFormValue((prevState) => {
      return {
        ...prevState,
        sector: values
      }
    });

  }

  const handleCheckbox = input => e => {
    let options = document.querySelectorAll('input[type=checkbox]');
    let checked = document.querySelectorAll('input:checked');
    let values = [];

    options.forEach(el => {
      if (el.checked ) {
        el.parentNode.classList.add('is-checked');
      } else {
        el.parentNode.classList.remove('is-checked');
      }
    });

    checked.forEach(el => {
      values.push(el.value);
    });

    setFormValue((prevState) => {
      return {
        ...prevState,
        sector: values
      }
    });
  }

  switch(step) {
    case 0:
      return (
        <Start nextStep={nextStep} />
      )
    case 1:
      return (
        <MinInvest 
          prevStep={prevStep} 
          nextStep={nextStep} 
          handleChange={handleChange} />
      )
    case 2:
      return (
        <Managed 
          prevStep={prevStep} 
          nextStep={nextStep} 
          handleChange={handleChange} />
      )
    case 3:
      return (
        <Type 
          prevStep={prevStep} 
          nextStep={nextStep} 
          handleChange={handleChange} />
      )
    case 4:
      return (
        <Volatility 
          prevStep={prevStep} 
          nextStep={nextStep} 
          handleChange={handleChange} />
      )
    case 5:
      return (
        <Sector 
          prevStep={prevStep} 
          nextStep={nextStep} 
          formValue={formValue}
          handleCheckbox={handleCheckbox}
          handleCheckboxAll={handleCheckboxAll} />
      )
    case 6:
      return (
        <Region 
          prevStep={prevStep} 
          showResult={showResult} 
          handleChange={handleChange} />
      )
    case 7:
      return (
        <Result 
          prevStep={prevStep}
          startOver={startOver}
          formValue={formValue}/>
      )
    default:
      return <h1>Default</h1>
  }
}  

export default Form;