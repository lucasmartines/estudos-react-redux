import React from "react";
import { connect } from "react-redux";
import { Card, Form } from "react-bootstrap";
import * as userAction from "../../store/usuario/actions";
const Profile = props => {
  return (
    <>
      <Card>
        <Card.Body>
          <h2> Profile Page </h2>

          <Form.Control
            type="email"
            placeholder="Your Name"
            onChange={e =>
              props.dispatch(userAction.renameUser(e.target.value))
            }
          />
        </Card.Body>
      </Card>
    </>
  );
};
const bindStateToProps = state => ({
  user: state
});
export default connect(bindStateToProps)(Profile);
