import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";

class Home extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.items.map((item) => {
      return (
        <div className="card" key={item.id}>
          <span className="card-title">{item.title}</span>
          <br />
          <div className="card-image">
            <img src={item.img} alt={item.title} />
            <br />
            <span
              to="/"
              className="btn btn-cargo-type"
              onClick={() => {
                this.handleClick(item.id);
              }}
            >
              <i className="btn">+</i>
            </span>
          </div>
          <br />

          <div className="card-content">
            <p>{item.desc}</p>
            <p>
              <b className="card-price">
                Price: <span className="dollar-sign">$</span>
                {item.price}.00
              </b>
            </p>
          </div>
        </div>
      );
    });

    return (
      <div className="container">
        <h3 className="center">Our items</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
