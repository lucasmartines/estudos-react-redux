import React from "react";

const Item = props => {
  let style = {
    textDecoration: "line-through"
  };

  style.textDecoration = props.completed ? "line-through" : "";

  return (
    <div style={style}>
      <h6 onClick={() => props.setClick(props.id)}>{props.title}</h6>
    </div>
  );
};
export default Item;
