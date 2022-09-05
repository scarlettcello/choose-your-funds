import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight} from '@fortawesome/free-solid-svg-icons';

function Result ({prevStep, startOver, formValue, populatePage}) {
  useEffect(() => {populatePage();}, []);

  const back = e => {
    e.preventDefault();
    prevStep();
  }

  const startAgain = e => {
    e.preventDefault();
    startOver();
  }

  const { yourFunds } = formValue;

  return (
    <div className='container'>
      <h1>The fund(s) for you are: </h1>
      {
        yourFunds.length < 1 ? <p>We couldn't find a fund you want. Please contact one of our awesome advisors!</p> : 
        <ul>{yourFunds.map(item => 
          <li key={item.fundCode}><a href={item.pageLink} target="_blank" rel="noreferrer">{item.fundName}</a></li>)}
        </ul>
      }
      <div className="steps">
        <div className="btn-area" onClick={back}>
          <FontAwesomeIcon icon={faAnglesLeft} className="secondary"/>
          <button className="secondary" label="prev">Back</button>
        </div>
        <div className="btn-area" onClick={startAgain}>
          <button className="primary" label="Start Over">Start over</button>
          <FontAwesomeIcon icon={faAnglesRight} className="primary" />
        </div>
      </div>   
    </div>
  )

}

export default Result