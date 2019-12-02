import React, { Component } from "react";
import "./styles.css";

class Todo extends Component {
  state = {
    id: this.props.tags,
    text: this.props.value
  };

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onDelete}
          className="btn btn-secondary btn-sm"
          id="addButton"
        >
          Delete
        </button>
        <span>{this.state.text}</span>
        <textarea
          maxLength="500"
          type="text"
          className="width-dynamic proba dva"
        />
        <p></p>
      </React.Fragment>
    );
  }
}

export default Todo;
