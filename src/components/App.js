import '../css/App.css';
import Slide from './Slide';
import ProductInfo from './ProductInfo';
import Header from './Header';
import { useState } from 'react';
import DisplayProduct from './DisplayProduct';

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
        let newProduct = true;
        let existingProductIndex = null;

        for (let i = 0; i < prevCart.length; i++) {
          if (prevCart[i].name === product.name) {
            newProduct = false;
            existingProductIndex = i;
          }
        }

        console.log(newProduct)
        if ( newProduct === false) {
          console.log('got here');
          let newCart = prevCart;
          newCart[existingProductIndex].quantity = product.quantity;
          console.log(newCart)
          return [...newCart];
        } else {
          
        if (product.quantity !== 0){
            if (prevCart[0] !== product) {
              prevCart.unshift(product);
            }
            handleQuantity('empty');;
            setEmptyCart(false);
          }
          return [...prevCart];
        }
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
    <>
      <Header cart={cart} handleCart={handleCart} emptyCart={emptyCart} />
      <main>
        <Slide />
        <DisplayProduct />
        <ProductInfo product={product} handleQuantity={handleQuantity} handleCart={handleCart} />
      </main>
    </>
  );
}

export default App;
