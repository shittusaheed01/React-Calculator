import React, { Component } from 'react';
import './index.css';


class Button extends Component {
  state = {  }
  render() { 
    return (
      <div className="btn-div">
        <div className="btn-container">
          <button
            onClick={this.props.Clicked}
            name="7"
            value="7"
            className="btn"
          >
            7
          </button>
          <button
            onClick={this.props.Clicked}
            value="8"
            name="8"
            className="btn"
          >
            8
          </button>
          <button
            onClick={this.props.Clicked}
            value="9"
            name="9"
            className="btn"
          >
            9
          </button>
          <button
            onClick={this.props.Clicked}
            name="4"
            value="4"
            className="btn"
          >
            4
          </button>
          <button
            onClick={this.props.Clicked}
            value="5"
            name="5"
            className="btn"
          >
            5
          </button>
          <button
            onClick={this.props.Clicked}
            value="6"
            name="6"
            className="btn"
          >
            6
          </button>
          <button
            onClick={this.props.Clicked}
            value="1"
            name="1"
            className="btn"
          >
            1
          </button>
          <button
            onClick={this.props.Clicked}
            value="2"
            name="2"
            className="btn"
          >
            2
          </button>
          <button
            onClick={this.props.Clicked}
            value="3"
            name="3"
            className="btn"
          >
            3
          </button>
          <button
            onClick={this.props.Clicked}
            value="."
            name="."
            className="btn"
          >
            .
          </button>
          <button
            onClick={this.props.Clicked}
            value="0"
            name="0"
            className="btn"
          >
            0
          </button>
          <button onClick={this.props.equal} value="=" name="=" className="btn">
            =
          </button>
        </div>
        <div className="btn-functions">
          <button
            onClick={this.props.delete}
            value="del"
            name="del"
            className="btn-func"
          >
            DEL
          </button>

          <button
            onClick={this.props.Clicked}
            value="/"
            name="÷"
            className="btn-func"
          >
            ÷
          </button>

          <button
            onClick={this.props.Clicked}
            value="*"
            name="x"
            className="btn-func"
          >
            x
          </button>

          <button
            onClick={this.props.Clicked}
            value="-"
            name="-"
            className="btn-func"
          >
            -
          </button>

          <button
            onClick={this.props.Clicked}
            value="+"
            name="+"
            className="btn-func"
          >
            +
          </button>
          <button
            onClick={this.props.clear}
            value="c"
            name="c"
            className="btn-func"
          >
            C
          </button>
        </div>
      </div>
    );
  }
}




export default Button;