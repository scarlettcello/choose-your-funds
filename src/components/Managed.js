import React, { Component } from 'react'

export class Managed extends Component {
  continue = e => {
    e.preventDefault();
    let selected = document.querySelectorAll('input:checked');
    if (selected.length < 1) {
      alert('Please select one.')
    } else {
      this.props.nextStep();
    }
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const {values, handleChange} = this.props;
    return (
      <>
        <h1>Do you want your funds to be managed by professionals?</h1>
        <input type="radio" name="managed" value="true" onChange={handleChange('managed')} />Managed
        <input type="radio" name="managed" value="false" onChange={handleChange('managed')}/>Unmanaged
        <div>
          <button label="prev" onClick={this.back}>Back</button>
          <button label="next" onClick={this.continue}>Next</button>
        </div>      
      </>
    )
  }
}

export default Managed;