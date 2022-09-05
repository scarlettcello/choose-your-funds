import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

function Start({nextStep, populatePage}) {
  useEffect(() => {populatePage();}, []);
  
  const next = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <div className="container">
      <h1></h1>
      <div className="btn-start" onClick={next}>
        <button className="primary" label="next" >Start</button>
        <FontAwesomeIcon icon={faPlay} className="primary"/>
      </div>
    </div>
  )
}

export default Start