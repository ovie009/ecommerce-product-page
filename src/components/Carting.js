import '../css/Carting.css';
import plus from '../images/icon-plus.svg';
import minus from '../images/icon-minus.svg';

const Carting = ({price, discount, quantity, handleQuantity, handleCart}) => {

    const originalPrice = price / (1 - (discount/100));

    return (
        <>
            <div className="price-wrapper">
                <div className="price">
                    <span className="present-price">${price}.00</span>
                    <span className="discount">{discount}%</span>
                </div>
                <span className="original-price"> 
                    <s>
                        ${originalPrice}.00
                    </s>
                </span>
            </div>
            <form >
                <div className='input-wrapper'>
                    <button className="minus-count" type='button' onClick={() => {handleQuantity('decrease')}} >
                        <img src={minus} alt="minus icon" />
                    </button>
                    <input type="number" name="cartCount" id="cart-count" value={quantity} readOnly/>
                    <button className="plus-count" type='button' onClick={() => {handleQuantity('increase')}}>
                        <img src={plus} alt="plus icon" />
                    </button>
                </div>
                <button className="add-to-cart" type='button' onClick={() =>  handleCart('add')}>
                    <ion-icon name="cart-outline"></ion-icon>
                    <span>
                    Add to cart
                    </span>
                </button>
            </form>
        </>
    );
}
 
export default Carting;