import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Form, Container } from "react-bootstrap";
import * as userAction from "../../store/usuario/actions";
const Profile = props => {
  let [user, setUser] = useState(props.user.name);
  let [photo, setPhoto] = useState(props.user.photo);

  console.log(props);
  if (props.name !== "") {
    user = props.user.name;
  }

  const sub = store.subscribe(() => {
    console.log(store.getState().usuario);
  });
  return (
    <Container className="">
      <Card className="col-12 col-sm-8 col-md-6 mt-3 mx-auto">
        <Card.Body>
          <h2> Profile Page </h2>
          <p> {user}</p>
          <div className="p-2">
            <img src={photo} width={64} alt="Avatar" />
          </div>
          <Form.Control
            type="text"
            placeholder="Your Name"
            value={props.user.name}
            onChange={e => {
              props.dispatch(userAction.renameUser(e.target.value));
              setUser(e.target.value);
            }}
          />
          <br />
          <Form.Control
            type="text"
            placeholder="Your Image Link"
            value={props.user.photo}
            onChange={e => {
              props.dispatch(userAction.changeUserPhoto(e.target.value));
              setPhoto(e.target.value);
            }}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};
const bindStateToProps = state => ({
  user: state.usuario
});
export default connect(bindStateToProps)(Profile);
