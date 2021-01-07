import React, { Component } from 'react';
import  Result  from "./Result";
import  Button  from "./Button";
import "./index.css";

class App extends Component {
  state = { 
    result : "",
    calculations : "",
    values : ""
  }
  handleClick = (event) =>{
    // console.log(event.target.name)
    this.setState((prevState) => ({
      calculations: (prevState.calculations += event.target.name),
      values: (prevState.values += event.target.value),
    }));
  }
  
  delete = () =>{
    this.setState((prevState) => ({
      calculations: prevState.calculations.slice(0, -1),
      values: prevState.values.slice(0, -1),
    }));
  }

  clear = () =>{
    this.setState((prevState) => ({
      calculations:"",
      values:"",
      result: ""
    }))
  }

  equal = () => {
    console.log(this.state.values)
    try {
    this.setState( 
      {result: (Function(`'use strict'; return ${this.state.values}`) () || "") + ""
    })
    }
    catch(err){
      this.setState(
        {result:"Error",
        calculations: ""
        })
    }
  }

  render() { 

    return (
      <section className="container" /*style = {style}*/>
        <Result result = {this.state.result} calc = {this.state.calculations} />
        <Button 
        Clicked = {this.handleClick}
        equal = {this.equal}
        delete = {this.delete} 
        clear = {this.clear} />
      </section>
    );
  }
}

export default App;