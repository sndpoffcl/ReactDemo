import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    tags: ["tags-1", "tags-2", "tags-3"],
  };

  render() {
    let counterFormatClasses = this.getCounterFormatClasses();
    return (
      <div>
        <p className={counterFormatClasses}>{this.formatCount()}</p>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary m-2"
        >
          Increment
        </button>
        <button onClick={this.handleDecrement} className="btn btn-warning m-2">
          Decrement
        </button>
        {this.renderTags()};
      </div>
    );
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
    console.log(this.state);
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state);
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    );
  }

  getCounterFormatClasses() {
    let classes = "text-white m-2";
    classes += this.state.count === 0 ? " bg-danger" : " bg-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;

/*
    function doIncrement(){

    }

    doIncrement(); -> execute the function 
*/
