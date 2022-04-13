import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from "../actions/cartActions";
import Recipe from "./Recipe";



class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map((item) => {
        return (
          <div className={classes.cart_card}>
            <li className={classes.cart_list} key={item.id}>
              <br />
              <br />
              <div className="">
                <img src={item.img} alt={item.img} className={classes.cart_img} />
                <br />
                <br />
                <div className={classes.add_remove}>
                  <Link to="/cart">
                    <i
                      className="btn btn-increment"
                      onClick={() => {
                        this.handleAddQuantity(item.id);
                      }}
                    >
                      +
                    </i>
                  </Link>
                  <Link to="/cart">
                    <i
                      className="btn  btn-increment"
                      onClick={() => {
                        this.handleSubtractQuantity(item.id);
                      }}
                    >
                      -
                    </i>
                  </Link>
                  <br />
                  <br />
                  <p>
                    <b>Quantity: {item.quantity}</b>
                  </p>
                </div>
              </div>
              <br />

              <div className="item-desc">
                <span className="card-title cart-title">{item.title}</span>
                <p>{item.desc}</p>
                <p>
                  <b>Price: {item.price}$</b>
                </p>

                <br />
                <button
                  className="waves-effect waves-light btn pink remove"
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          </div>
        );
      })
    ) : (
      <p>
        :(
      </p>
    );
    return (
      <div className="container">
        <div className="cart">
          <h5>Your Cart:</h5>
          <ul className="collection">{addedItems}</ul>
        </div>
        <Recipe />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
