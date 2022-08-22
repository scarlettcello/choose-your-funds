import React, { Component } from 'react';
import Start from './Start';
import Brand from './Brand';
import Managed from './Managed';
import Volatility from './Volatility';
import Sector from './Sector';
import Region from './Region';
import Result from './Result';

export class Form extends Component {
  state = {
    step: 0,
    brand: '',
    managed: true,
    volatility: 0,
    sector: [],
    region: ''
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }
    
  startOver = e => {
    const { step } = this.state;
    this.setState({
      step: step - 5
    })
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  handleCheckbox = input => e => {
    let checked = document.querySelectorAll('input:checked');
    let values = [];
    checked.forEach(el => values.push(el.value));
    this.setState({
      sector: values
    })
  }

  render() {
    const { step } = this.state;
    const { brand, managed, volatility, sector, region } = this.state;
    const values = { brand, managed, volatility, sector, region }
    
    switch(step) {
      case 0:
        return (
          <Start nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        )
      case 1:
        return (
          <Brand prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        )
      case 2:
        return (
          <Managed prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        )
      case 3:
        return (
          <Volatility prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        )
      case 4:
        return (
          <Sector prevStep={this.prevStep} nextStep={this.nextStep} handleCheckbox={this.handleCheckbox} values={values} />
        )
      case 5:
        return (
          <Region prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values} />
        )
      case 6:
        return (
          <Result startOver={this.startOver} />
        )
      default:
        return <h1>Default</h1>
    }
  }
}

export default Form;