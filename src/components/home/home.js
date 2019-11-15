import React, { Component } from "react";
import { connect } from "react-redux";
import * as contadorAction from "../../store/contador/action";
class Home extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }
  changeConter(number = 1) {
    number > 0
      ? this.props.dispatch(contadorAction.incrementar())
      : this.props.dispatch(contadorAction.decrementar());
  }
  render() {
    return (
      <>
        {/* <h2>Teste {store.getState().contador}</h2> */}
        <h2> Contador {this.props.contador}</h2>
        <button onClick={e => this.changeConter(1)} className="btn btn-primary">
          Upgrade Variavel
        </button>
        <button
          onClick={e => this.changeConter(-1)}
          className="btn btn-primary"
        >
          Reduce Variavel
        </button>
      </>
    );
  }
}
const mapStateToProps = state => ({
  contador: state.contador
});
export default connect(mapStateToProps)(Home);
