import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  render() {
    const {
      img,
      price,
      productName,
      brandName
    } = this.props;
    return (
      <div className="card">
        <div className="cardImg">{img}</div>
        <div className="cardInfo">
          <p className="brand noMargin">{brandName}</p>
          <p className="product noMargin">{productName}</p>
          <p className="price noMargin">{`${price} €`}</p>
        </div>
      </div>
    );
  }
}

export default Card;
