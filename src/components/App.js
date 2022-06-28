import '../css/App.css';
import Slide from './Slide';
import ProductInfo from './ProductInfo';
import Header from './Header';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [emptyCart, setEmptyCart] = useState(true)
  const [product, setProduct] = useState({
    company: 'sneaker company',
    name: 'Fall Limited Edition Sneakers',
    about: `These low-profile-sneakers are your perfect causual wear campanion.
        Featuring a durable rubber outer side, they'll withstand everything the weather can offer`,
    price: 125,
    discount: 50,
    quantity: 0
  });

  const handleQuantity = (action) => {
    if (action === 'increase') {
      setProduct(prevProduct => {
        let newQuantity = prevProduct.quantity + 1;
        return {...prevProduct, quantity: newQuantity};
      })

    } else if (action === 'decrease'){
      setProduct(prevProduct => {
        let newQuantity = prevProduct.quantity - 1;
        if (newQuantity === -1) newQuantity = 0;
        return {...prevProduct, quantity: newQuantity};
      })      

    } else if (action === 'empty'){
      setProduct(prevProduct => {
        let newQuantity = 0;
        return {...prevProduct, quantity: newQuantity};
      })      
    }
  } 

  const handleCart = (action) => {
    if (action === 'add') {
      setCart(prevCart => {
        // console.log(product);
        if (product.quantity !== 0){
          if (prevCart[0] !== product) {
            prevCart.unshift(product);
          }
          handleQuantity('empty');;
          setEmptyCart(false);
        }
        return [...prevCart];
      })
    } else if (action === 'checkout'){
      setEmptyCart(true);
      setCart([]);
    } else {
      let newCart = cart;
      // eslint-disable-next-line
      let removedArry = newCart.splice(action, 1);
      if (newCart.length === 0) setEmptyCart(true);
      setCart([...newCart])
    }
  }

  // console.log(cart);

  return (
    <div className="App">
      <Header cart={cart} handleCart={handleCart} emptyCart={emptyCart} />
      <Slide />
      <ProductInfo product={product} handleQuantity={handleQuantity} handleCart={handleCart} />
    </div>
  );
}

export default App;
