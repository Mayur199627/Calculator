import Header from "./Components/Header";
import './Components/Keypad.css'

import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      value:"",
    };
  }

  handleOperation = (operator) =>{
      if(operator === "="){
        this.setState({value: `${eval(this.state.value)}`})
      }
      else if (operator === "-" || operator === "+" || operator === "*" || operator === "/"){
        this.state.value.includes("-") || this.state.value.includes("+") || this.state.value.includes("*") || this.state.value.includes("/") ? this.setState({value:`${eval(this.state.value)}`.concat(operator)})  : this.setState({value:this.state.value.concat(operator)})
      }
      
  }

  render() {
    return ( 
      <div className="app">
        <div className="app_calculator">
        <div className="app_calculator_nav">Calculator</div>
          <Header display={this.state}/>

          <div className='keypad'>
        <button onClick={()=>{this.setState({value:""})}}>AC</button>
        <button onClick={()=>{this.setState({value:this.state.value.slice(0,-1)})}}>C</button>
        <button name="/" onClick={(e)=>{this.handleOperation(e.target.name)}}>/</button>
        <button name="*" onClick={(e)=>{this.handleOperation(e.target.name)}}>*</button>
        <button name="+" onClick={(e)=>{this.handleOperation(e.target.name)}}>+</button>
        <button name="-" onClick={(e)=>{this.handleOperation(e.target.name)}}>-</button>
        <button name="7" onClick={(e)=>this.setState({value:this.state.value.concat(e.target.name)})}>7</button>
        <button name="8" onClick={(e)=>this.setState({value:this.state.value.concat(e.target.name)})}>8</button>
        <button name="9" onClick={(e)=>this.setState({value:this.state.value.concat(e.target.name)})}>9</button>
        <button name="4" onClick={(e)=>this.setState({value:this.state.value.concat(e.target.name)})}>4</button>
        <button name="5" onClick={(e)=>this.setState({value:this.state.value.concat(e.target.name)})}>5</button>
        <button name="6" onClick={(e)=>this.setState({value:this.state.value.concat(e.target.name)})}>6</button>
        <button name="1" onClick={(e)=>this.setState({value:this.state.value.concat(e.target.name)})}>1</button>
        <button name="2" onClick={(e)=>this.setState({value:this.state.value.concat(e.target.name)})}>2</button>
        <button name="3" onClick={(e)=>this.setState({value:this.state.value.concat(e.target.name)})}>3</button>
        <button name="0" onClick={(e)=>this.setState({value:this.state.value.concat(e.target.name)})}>0</button>
        <button name="." onClick={(e)=>this.setState({value:this.state.value.concat(e.target.name)})}>.</button>
        <button name="=" onClick={(e)=>{this.handleOperation(e.target.name)}}>=</button>
      </div>

        </div>
      </div>
      );
  }
}

