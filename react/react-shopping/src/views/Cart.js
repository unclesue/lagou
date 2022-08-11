import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../store/action/cart";

class Cart extends Component {
  componentDidMount() {
    this.props.getCartsFromService();
  }
  updateCartCount(cart, { target }) {
    this.props.updateCartFromService({ cart, count: target.value })
  }
  render() {
    const { deleteCartFromService } = this.props
    return (
      <section className="container content-section">
        <h2 className="section-header">购物车</h2>
        <div className="cart-row">
          <span className="cart-item cart-header cart-column">商品</span>
          <span className="cart-price cart-header cart-column">价格</span>
          <span className="cart-quantity cart-header cart-column">数量</span>
        </div>
        <div className="cart-items">
          {this.props.carts.map(item => (
            <div className="cart-row" key={item.id}>
              <div className="cart-item cart-column">
                <img
                  className="cart-item-image"
                  src={`http://localhost:3005${item.thumbnail}`}
                  width="100"
                  height="100"
                  alt={item.title}
                />
                <span className="cart-item-title">
                  {item.title}
                </span>
              </div>
              <span className="cart-price cart-column">￥{item.price}</span>
              <div className="cart-quantity cart-column">
                <input className="cart-quantity-input" type="number" value={item.count} onChange={(e) => this.updateCartCount(item, e)} />
                <button className="btn btn-danger" type="button" onClick={() => deleteCartFromService(item.id)}>
                  删除
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-total">
          <strong className="cart-total-title">总价</strong>
          <span className="cart-total-price">￥{this.props.carts.reduce((total, cart) => total + cart.price * cart.count, 0)}</span>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ carts: state.cart });
const mapDispatchToProps = (dispatch) => bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
