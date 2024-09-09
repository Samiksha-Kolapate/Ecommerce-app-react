import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementSagaCount } from "../store/Counter/counter.action";
import { decrementSagaCount } from "../store/Counter/counter.action";

class Counter extends Component {
  render() {
    
    return (
      <div>
        <h1>Count: {this.props.count}</h1>
        <button onClick={() => this.props.incrementAction()}>Increment</button>
        <br />
        <br />
        <button onClick={() => this.props.decrementAction()}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
     count: state.counter.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      incrementAction: incrementSagaCount,
      decrementAction: decrementSagaCount
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
