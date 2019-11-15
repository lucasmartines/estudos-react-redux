import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { getAllUsers, modifyUser } from "../../store/mock/actions.js";
import axios from "axios";
import Item from "./Item.js";

class dataComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleComplete = this.toggleComplete.bind(this);
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos").then(data => {
      this.props.dispatch(getAllUsers(data.data));
    });
  }
  toggleComplete(id) {
    this.props.dispatch(modifyUser(id));
    this.forceUpdate();
    /* this.props.mock.items.forEach(e => {
      if (e.id === id) {
        e.completed = !e.completed;
        this.forceUpdate();
      }
    });*/
  }
  render() {
    return (
      <>
        <h2> Items </h2>

        <ul className="text-left">
          {this.props.mock.items.map(element => (
            // <div key={element.id}> {element.title} </div>
            <Item
              completed={element.completed}
              key={element.id}
              id={element.id}
              title={element.title}
              setClick={id => {
                this.toggleComplete(id);
                // console.log(id);
              }}
            />
          ))}
        </ul>
      </>
    );
  }
}
const mapStateToProps = state => ({
  mock: state.mock
});
export default connect(mapStateToProps)(dataComponent);
