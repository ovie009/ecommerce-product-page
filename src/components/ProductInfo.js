import Carting from "./Carting";
import '../css/ProductInfo.css';

const ProductInfo = ({product, handleQuantity, handleCart}) => {

    return ( 
        <div className="product-wrapper">
            <span className="product-preview">{product.company}</span>
            <h1 className="product-heading">{product.name}</h1>
            <p className="product-paragraph">
                {product.about}
            </p>
            <Carting price={product.price} discount={product.discount} quantity={product.quantity} handleQuantity={handleQuantity} handleCart={handleCart} />
        </div>
    );
}
 
export default ProductInfo;