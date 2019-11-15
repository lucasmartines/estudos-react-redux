import React from "react";
import { Link } from "react-router-dom";
import { Card, Container, Img } from "react-bootstrap";
import { connect } from "react-redux";

const About = props => {
  return (
    <Container className="">
      <Card className="col-12 col-sm-8 col-md-6 mt-3 mx-auto">
        <Card.Body>
          <h2> About Page </h2>
          <p>Aplicação de teste do redux </p>
          <img
            src="https://i1.wp.com/cdn-images-1.medium.com/max/1600/1*Vo5RDpNkOsfDn8sx06mthA.png?resize=1366%2C1380&ssl=1"
            width="64"
            heigth="64"
            alt="imagem do redux"
          />

          <p>
            Nome do usuario:<b>{props.usuario.name}</b>
          </p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default connect(state => ({
  usuario: state.usuario
}))(About);
