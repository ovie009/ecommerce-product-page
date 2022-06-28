import deleteIcon from '../images/icon-delete.svg';
import productthumbnail from '../images/image-product-1-thumbnail.jpg';

const Carts = ({cart, handleCart, emptyCart}) => {

    return (
        <div className="carts">
            <h1 className="carts-heading">Cart</h1>
            { !emptyCart && 
                <ul className="cart-list">
                    {
                        cart.map((item, index) => (
                            <li className="cart-map-items" key={index}>
                                <div className="cart-thumbnail">
                                    <img src={productthumbnail} alt="product thumbnail" />
                                </div>
                                <div className="cart-text-wrapper">
                                    <p>{item.name}</p>
                                    <p>${item.price} x {item.quantity} <strong> ${item.price * item.quantity} </strong> </p>
                                </div>
                                <button className="delete-cart" onClick={() => handleCart(index) }>
                                    <img src={deleteIcon} alt="delete icon" />
                                </button>
                            </li>
                        ))
                    }
                    <li className="cart-items">
                        <button type="button" className="checkout" onClick={() => handleCart('checkout') }>Checkout</button>
                    </li>
                </ul>
            }

            { emptyCart && 
                <div className="empty-cart">
                    <h1 className="empty-heading">
                        your cart is empty
                    </h1>
                </div>
            }
        </div>
    );
}
 
export default Carts;