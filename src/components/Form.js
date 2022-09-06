import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Start from './Start';
import MinInvest from './MinInvest';
import Managed from './Managed';
import Type from './Type';
import Volatility from './Volatility';
import Sector from './Sector';
import Region from './Region';
import Result from './Result';

function Form ({fundsData, pagesData}) {
  const [formValue, setFormValue] = useState({
    step: 0,
    minInvest: "",
    managed: true,
    type: "",
    volatility: 0,
    equitySectors: [],
    fixedIncomeSectors: [],
    region: '',
    yourFunds: {}
  });

  const [pageContent, setPageContent] = useState({
    step: 0,
    heading: '',
    body: ''
  });

  let {step, minInvest, managed, volatility, equitySectors, fixedIncomeSectors, region, type} = formValue;

  const populatePage = () => {
    let content;
    content = pagesData.filter(item => item.step === step);

    setPageContent((prevState) => {
      return {
        ...prevState,
        step: content[0].step,
        heading: content[0].heading,
        body: content[0].body
      }
    }); 
  }

  const heading  = document.querySelector('h1');
  const body = document.querySelector('p');
  
  if (heading !== null) heading.innerHTML = pageContent.heading;
  if (body !== null) body.innerHTML = pageContent.body;

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

  const handleChange = input => e => {
    toast.dismiss();
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
    const checkAllEq = document.getElementById('all-eq');
    const checkAllFI = document.getElementById('all-fi');
    const eqOptions = document.querySelectorAll('input[name=equitySectors]');
    const fIOptions = document.querySelectorAll('input[name=fixedIncomeSectors]');

    toast.dismiss();

    // If "Select All" checkbox is checked, mark all options as checked and add 'is-checked' class
    // If "Select All" checkbox is unchecked, mark all options as unchecked and remove 'is-checked' class

    if (checkAllEq.checked) {
      eqOptions.forEach(el => el.checked = true);
      eqOptions.forEach(el => el.parentNode.classList.add('is-checked'));
    } else {
      eqOptions.forEach(el => el.checked = false);
      eqOptions.forEach(el =>el.parentNode.classList.remove('is-checked'));
    }

    if (checkAllFI.checked) {
      fIOptions.forEach(el => el.checked = true);
      fIOptions.forEach(el => el.parentNode.classList.add('is-checked'));
    } else {
      fIOptions.forEach(el => el.checked = false);
      fIOptions.forEach(el => el.parentNode.classList.remove('is-checked'));
    }

    // If at least one option is de-selected, deselect "Select All" checkbox as well
    if (eqOptions.checked < eqOptions.length) checkAllEq.checked = false;
    if (fIOptions.checked < fIOptions.length) checkAllFI.checked = false;

    let checked = document.querySelectorAll('input:checked');
    let values = [];

    checked.forEach(el => {
      values.push(el.value);
    });

    if (checkAllEq.checked) {
      setFormValue((prevState) => {
        return {
          ...prevState,
          equitySectors: values,
          fixedIncomeSectors: []
        }
      });
    }

    if (checkAllFI.checked) {
      setFormValue((prevState) => {
        return {
          ...prevState,
          equitySectors: [],
          fixedIncomeSectors: values
        }
      });
    }
  }

  const handleCheckbox = input => e => {
    let options = document.querySelectorAll('input[type=checkbox]');
    let eqChecked = document.querySelectorAll('input[name=equitySectors]:checked');
    let fIChecked = document.querySelectorAll('input[name=fixedIncomeSectors]:checked');
    let eqValues = [];
    let fIValues = [];

    toast.dismiss();

    options.forEach(el => {
      if (el.checked ) {
        el.parentNode.classList.add('is-checked');
      } else {
        el.parentNode.classList.remove('is-checked');
      }
    });

    if (type === 'Equity' && eqChecked.length > 0) {
      eqChecked.forEach(el => eqValues.push(el.value));

      setFormValue((prevState) => {
        return {
          ...prevState,
          equitySectors: eqValues,
          fixedIncomeSectors: []
        }
      });
    } else if (type === 'Fixed Income' && fIChecked.length > 0) {
      fIChecked.forEach(el => fIValues.push(el.value));

      setFormValue((prevState) => {
        return {
          ...prevState,
          equitySectors: [],
          fixedIncomeSectors: fIValues,
        }
      });
    } else {
      eqChecked.forEach(el => eqValues.push(el.value));
      fIChecked.forEach(el => fIValues.push(el.value));

      setFormValue((prevState) => {
        return {
          ...prevState,
          equitySectors: eqValues,
          fixedIncomeSectors: fIValues,
        }
      });
    }   
  }

  const showResult = () => {
    nextStep();
    const funds = fundsData;

    let managedState = managed; 
    let isManaged = (managedState === "true");
    let filtered = funds
      .filter(el => el.minInvest === minInvest)
      .filter(el => el.managed === isManaged)
      .filter(el => el.volatility === volatility)
      .filter(el => el.region === region);
    
    let yourFunds = [];
    yourFunds = compareSectors(filtered, equitySectors, fixedIncomeSectors);
    console.log(yourFunds);
    
    setFormValue((prevState) => {
      return { 
        ...prevState,
        yourFunds 
      }
    });
  }

  const compareSectors = (funds, eqSectors, fISectors) => {
    let filteredFundsSectors = [];
    let match = [];
    let matchedFunds = [];

    // looping through funds filtered by other parameters
    for (let i = 0; i < funds.length; i++) {

      // Check if each item is equity or fixed-income or balanced
      if (funds[i].fixedIncomeSectors == null) {

        // Push the sectors of filtered funds to an array
        filteredFundsSectors = [ ...funds[i].equitySectors];

      } else if (funds[i].equitySectors == null) {
        filteredFundsSectors = [ ...funds[i].fixedIncomeSectors];

      } else {
        filteredFundsSectors = [...funds[i].equitySectors];
        filteredFundsSectors = [...funds[i].fixedIncomeSectors];
      }
      // Compare sectors of filtered funds and the sectors user selected and assign to an array
      match = filteredFundsSectors.filter(el => eqSectors.includes(el) || fISectors.includes(el));
console.log(filteredFundsSectors);
console.log(match);
      if (match.length > 0) {
        matchedFunds.push(funds[i]);
      }
    }   

    return matchedFunds;
  }

  switch(step) {
    case 0:
      return (
        <Start 
          populatePage={populatePage}
          nextStep={nextStep} 
        />
      )
    case 1:
      return (
        <MinInvest 
          populatePage={populatePage}
          handleChange={handleChange} 
          prevStep={prevStep} 
          nextStep={nextStep} 
        />
      )
    case 2:
      return (
        <Managed
          populatePage={populatePage}
          prevStep={prevStep} 
          nextStep={nextStep} 
          handleChange={handleChange} />
      )
    case 3:
      return (
        <Type 
          populatePage={populatePage}
          prevStep={prevStep} 
          nextStep={nextStep} 
          handleChange={handleChange} />
      )
    case 4:
      return (
        <Volatility
          populatePage={populatePage}
          prevStep={prevStep} 
          nextStep={nextStep} 
          handleChange={handleChange} />
      )
    case 5:
      return (
        <Sector
          populatePage={populatePage}
          prevStep={prevStep} 
          nextStep={nextStep} 
          formValue={formValue}
          handleCheckbox={handleCheckbox}
          handleCheckboxAll={handleCheckboxAll} />
      )
    case 6:
      return (
        <Region
          populatePage={populatePage}
          prevStep={prevStep} 
          showResult={showResult} 
          handleChange={handleChange} />
      )
    case 7:
      return (
        <Result
          populatePage={populatePage}
          prevStep={prevStep}
          startOver={startOver}
          formValue={formValue}/>
      )
    default:
      return <h1>Default</h1>
  }
}  

export default Form;