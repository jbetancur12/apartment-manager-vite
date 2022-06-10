import React from "react";
import Card from "../Card/Card";
import "./MainCards.scss";

const MainCards = () => {
  return (
    <div className="pure-u-1">
      <div className="pure-u-1">
        <div className="pure-u-1-2">
          <Card className="MainCards" backgroundColor="#e59090">
            <Card.Body className="MainCards-body_center">
              <p>Propiedades Rentados</p>
              <p>0</p>
            </Card.Body>
          </Card>
        </div>
        <div className="pure-u-1-2">
          <Card className="MainCards" backgroundColor="#e59090">
            <Card.Body className="MainCards-body_center">
              <p>Propiedades Libres</p>
              <p>0</p>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="pure-u-1" style={{ marginTop: 16 }}>
        <div className="pure-u-1-2">
          <Card className="MainCards" backgroundColor="#e59090">
            <Card.Body className="MainCards-body_center">
              <p>Propiedades Rentados</p>
              <p>0</p>
            </Card.Body>
          </Card>
        </div>
        <div className="pure-u-1-2">
          <Card className="MainCards" backgroundColor="#e59090">
            <Card.Body className="MainCards-body_center">
              <p>Propiedades Libres</p>
              <p>0</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MainCards;
