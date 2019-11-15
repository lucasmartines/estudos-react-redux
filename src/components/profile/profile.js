import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Form, Container } from "react-bootstrap";
import * as userAction from "../../store/usuario/actions";
const Profile = props => {
  let [user, setUser] = useState(props.user.name);

  if (props.user.name !== "") {
    user = props.user.name;
  }

  return (
    <Container className="">
      <Card className="col-12 col-sm-8 col-md-6 mt-3 mx-auto">
        <Card.Body>
          <h2> Profile Page </h2>
          <p> {user}</p>
          <Form.Control
            type="email"
            placeholder="Your Name"
            onChange={e => {
              props.dispatch(userAction.renameUser(e.target.value));
              setUser(e.target.value);
            }}
          />
        </Card.Body>
      </Card>
    </Container>
  );
};
const bindStateToProps = state => ({
  user: state
});
export default connect(bindStateToProps)(Profile);
