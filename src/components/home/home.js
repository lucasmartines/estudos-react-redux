import React, { Component } from "react";
import { connect } from "react-redux";
import * as contadorAction from "../../store/contador/action";
import { Card, Form, Container } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  changeConter(number = 1) {
    number > 0
      ? this.props.dispatch(contadorAction.incrementar())
      : this.props.dispatch(contadorAction.decrementar());
  }
  render() {
    return (
      <Container className="">
        <Card className="col-12 col-sm-8 col-md-6 mt-3 mx-auto">
          <Card.Body>
            {/* <h2>Teste {store.getState().contador}</h2> */}
            <h2> Contador {this.props.contador}</h2>
            <button
              onClick={e => this.changeConter(1)}
              className="btn btn-danger m-2"
            >
              Upgrade Variavel
            </button>
            <button
              onClick={e => this.changeConter(-1)}
              className="btn btn-success m-2"
            >
              Reduce Variavel
            </button>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  contador: state.contador
});
export default connect(mapStateToProps)(Home);
