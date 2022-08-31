import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function Start({nextStep}) {
  const next = e => {
    e.preventDefault();
    nextStep();
  }
  
  return (
    <div className="container">
      <h1>Do you want to know the best funds for you?</h1>
      <div className="btn-start" onClick={next}>
        <button className="primary" label="next" >Start</button>
        <FontAwesomeIcon icon={faPlay} className="primary"/>
      </div>
    </div>
  )
}

export default Start