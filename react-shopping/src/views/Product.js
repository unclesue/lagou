import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../store/action/product";
import * as cartActions from "../store/action/cart";

class Product extends Component {
  componentDidMount() {
    this.props.getProductsFromService();
  }
  render() {
    const { setCartToService } = this.props
    return (
      <section className="container content-section">
        <h2 className="section-header">商品列表</h2>
        <div className="shop-items">
          { this.props.products.map(item => (
            <div className="shop-item" key={item.id}>
              <img className="shop-item-image" src={`http://localhost:3005${item.thumbnail}`} alt={item.title} />
              <span className="shop-item-title">
                {item.title}
              </span>
              <div className="shop-item-details">
                <span className="shop-item-price">￥{item.price}</span>
                <button
                  className="btn btn-primary shop-item-button"
                  type="button"
                  onClick={() => setCartToService(item.id)}
                >
                  加入购物车
                </button>
              </div>
            </div>
          )) }
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.product });
const mapDispatchToProps = (dispatch) =>({
  ...bindActionCreators(productActions, dispatch),
  ...bindActionCreators(cartActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
