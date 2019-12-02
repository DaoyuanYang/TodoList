import React, { Component } from "react";
import Todo from "./toDo";

class ToDoList extends Component {
  state = {
    tags: [1, 2, 3]
  };

  incrementToDo = () => {
    let newTags = this.state.tags;
    console.log(newTags.length);
    let newElement = 1 + parseInt(newTags.slice(newTags.length - 1));
    newTags.push(newElement);
    this.setState((this.state.tags = newTags));
    console.log("incrementToDo pressed!");
  };

  handleDelete = id => {
    console.log("Delete element with id :" + id);
    let newTags = this.state.tags.filter(t => t !== id);
    if (newTags.length === 0) newTags = [1];
    console.log(newTags);
    this.setState({ tags: newTags });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.tags.map(tag => (
            <Todo
              onDelete={() => {
                this.handleDelete(tag);
              }}
              key={tag}
              value={tag}
            />
          ))}
        </div>
        <button onClick={this.incrementToDo}>Add your next thing to do.</button>
      </React.Fragment>
    );
  }
}

export default ToDoList;
