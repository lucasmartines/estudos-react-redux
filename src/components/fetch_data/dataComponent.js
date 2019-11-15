import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../../store/mock/actions.js";
import axios from "axios";
import Item from "./Item.js";

const dataComponent = props => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then(data => {
    this.props.dispatch(getAllUsers(data.data));
  });

  return (
    <>
      <h2> Items </h2>

      <ul className="text-left">
        {props.mock.items.map(element => (
          <div key={element.id}>
            {" "}
            {element.title} {element.completed ? "COMPLETE" : "FALSE"}{" "}
          </div>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  mock: state.mock
});
export default connect(mapStateToProps)(dataComponent);

// class dataComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentDidMount() {
//     axios.get("https://jsonplaceholder.typicode.com/todos").then(data => {
//       this.props.dispatch(getAllUsers(data.data));
//     });
//   }
//   render() {
//     return (
//       <>
//         <h2> Items </h2>

//         <ul className="text-left">
//           {this.props.mock.items.map(element => (
//             <div key={element.id}> {element.title} </div>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }
