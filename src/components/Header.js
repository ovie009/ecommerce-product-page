import '../css/Header.css';
import menu from '../images/icon-menu.svg';
import cartIcon from '../images/icon-cart.svg';
import avatar from '../images/image-avatar.png';
import Sidebar from './Sidebar';
import Carts from './Carts';
import { useState } from 'react';

const Header = ({cart, handleCart, emptyCart}) => {

    const [sidebar, setSidebar] = useState(false);

    const [showCart, setShowCart] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar);
    }

    const handleShowCart = () => {
        setShowCart(!showCart);
    }

    return (  
        <header>
            <nav>
                <div className="nav-left-wrapper">
                    <button type='button' className='open-sidebar' onClick={handleSidebar}>
                        <img src={menu} alt="menu icon" className="menu" />
                    </button>
                    <strong className="logo">sneakers</strong>
                    <ul className="nav-list">
                        <li> collection </li>
                        <li> men </li>
                        <li> women </li>
                        <li> about </li>
                        <li> contact </li>
                    </ul>
                </div>
                <div className="nav-right-wrapper">
                    <button className="cart-icon-wrapper" type='button' onClick={handleShowCart}>
                        { !emptyCart && <div className="badge">{cart.length}</div> }
                        <img src={cartIcon} alt="cart icon" className="cart" />
                    </button>
                    <div className="avatar-image-wrapper">
                        <img src={avatar} alt="avatar icon" className="avatar-image" />
                    </div>
                </div>
                { sidebar && <Sidebar handleSidebar={handleSidebar} /> }
                { showCart && <Carts cart={cart} handleCart={handleCart} emptyCart={emptyCart} /> }
                
            </nav>
        </header>
    );
}
 
export default Header;