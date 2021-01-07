import React, { Component } from 'react';
import "./index.css";

class Result extends Component {
  state = {  }
  render() { 
    return (
      <form>
        <input
          className="input"
          placeholder="Enter your values"
          disabled
          value={this.props.calc}
        />
        <input
          className="input"
          placeholder="Result"
          disabled
          value={this.props.result}
        />
      </form>
    );
  }
}

export default Result;