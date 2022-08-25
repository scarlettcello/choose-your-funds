import React, { Component } from 'react';
import Start from './Start';
import Minimum from './Minimum';
import Managed from './Managed';
import Volatility from './Volatility';
import Sector from './Sector';
import Region from './Region';
import Result from './Result';
import data from '../db.json';

export class Form extends Component {
  state = {
    step: 0,
    minimum: "none",
    managed: true,
    volatility: 0,
    sector: [],
    region: '',
    yourFunds: {}
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  showResult = () => {
    this.nextStep();
    const fundsData = JSON.stringify(data);
    const funds = JSON.parse(fundsData).funds;
    let managedState = this.state.managed; 
    let isManaged = (managedState === "true");
    let filtered = funds
      .filter(el => el.minimum == this.state.minimum)
      .filter(el => el.managed == isManaged)
      .filter(el => el.volatility === this.state.volatility)
      .filter(el => el.region == this.state.region);
    let yourFunds = this.compareSectors(filtered, this.state.sector);
    this.setState({ yourFunds })
  }

  compareSectors = (funds, selectedSectors) => {
    let matchedFunds = []
    for (let i = 0; i < funds.length; i++) {
      let fundsSectors = funds[i].sector;
      let match = fundsSectors.filter(el => selectedSectors.includes(el))
      if (match.length > 0) {
        matchedFunds.push(funds[i]);
        
      }
    }
    return matchedFunds;
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
    const { minimum, managed, volatility, sector, region } = this.state;
    const { yourFunds } = this.state;
    const values = { minimum, managed, volatility, sector, region }

    switch(step) {
      case 0:
        return (
          <Start 
            nextStep={this.nextStep} 
            handleChange={this.handleChange} 
            values={values} />
        )
      case 1:
        return (
          <Minimum 
            prevStep={this.prevStep} 
            nextStep={this.nextStep} 
            handleChange={this.handleChange} 
            values={values} />
        )
      case 2:
        return (
          <Managed 
            prevStep={this.prevStep} 
            nextStep={this.nextStep} 
            handleChange={this.handleChange} 
            values={values} />
        )
      case 3:
        return (
          <Volatility 
            prevStep={this.prevStep} 
            nextStep={this.nextStep} 
            handleChange={this.handleChange} 
            values={values} />
        )
      case 4:
        return (
          <Sector 
            prevStep={this.prevStep} 
            nextStep={this.nextStep} 
            handleCheckbox={this.handleCheckbox} 
            values={values} />
        )
      case 5:
        return (
          <Region 
            prevStep={this.prevStep} 
            showResult={this.showResult} 
            handleChange={this.handleChange} 
            values={values} />
        )
      case 6:
        return (
          <Result startOver={this.startOver} yourFunds={yourFunds}/>
        )
      default:
        return <h1>Default</h1>
    }
  }
}

export default Form;