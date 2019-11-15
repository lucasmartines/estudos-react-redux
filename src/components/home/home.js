import React, { useState, Component } from "react";
import { connect } from "react-redux";
import { incrementar, decrementar } from "../../store/contador/reducer";
import ContadorReducer from "../../store/contador/reducer";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }
  componentDidMount() {}
  render() {
    return (
      <>
        <h2>Teste {this.state.contador}</h2>
        <button className="btn btn-primary">Upgrade Variavel</button>
        <button className="btn btn-primary">Reduce Variavel</button>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    contador: state.contador
  };
};
export default connect(mapStateToProps)(Home);
