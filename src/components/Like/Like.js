import React, { Component } from "react";

class Like extends Component {
  render() {
    const { onClick, liked } = this.props;
    let classes = "fa fa-heart";
    if (!liked) classes += "-o";
    return (
      <i
        onClick={onClick}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
