import React, { useState } from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../../store/mock/actions.js";
import axios from "axios";
import Item from "./Item.js";

const dataComponent = props => {
  let [items, setItems] = useState([]);

  axios.get("https://jsonplaceholder.typicode.com/todos").then(data => {
    props.dispatch(getAllUsers(data.data));
    setItems(data.data);
  });

  // console.log(props.mock.items);
  return (
    <>
      <h2> Items </h2>
      <ul>
        {/*props.mock.*/ items.forEach(element => (
          <div key={element.id}> {element.title} </div>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => ({
  mock: state.mock
});
export default connect(mapStateToProps)(dataComponent);
