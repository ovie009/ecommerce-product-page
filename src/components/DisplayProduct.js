import product_1 from '../images/image-product-1.jpg';
import product_2 from '../images/image-product-2.jpg';
import product_3 from '../images/image-product-3.jpg';
import product_4 from '../images/image-product-4.jpg';
import '../css/DisplayProduct.css';
import { useState } from 'react';

const DisplayProduct = () => {

    const [overlay, setOverlay] = useState({
        showOverlay: false,
        width: 0,
        displayImage: product_1,
        slide0: true,
        slide1: false,
        slide2: false,
        slide3: false
    });

    const handleDisplay = (Show, Width, Image) => {
        setOverlay((prevOverlay) =>{
            let slide = [];
            if (Width === 0) slide = [true, false, false, false]; 
            if (Width === -40) slide = [false, true, false, false]; 
            if (Width === -80) slide = [false, false, true, false]; 
            if (Width === -120) slide = [false, false, false, true]; 
            return {
                showOverlay: Show,
                width: Width,
                displayImage: Image,
                slide0: slide[0],
                slide1: slide[1],
                slide2: slide[2],
                slide3: slide[3]
            }
        })
    }

    const hideOverlay = () => {
        setOverlay((prevOverlay) => {
            return {...prevOverlay, showOverlay: false}
        })
    }
    
    const nextOverlay = () => {
        setOverlay((prevOverlay) => {
            let Width = prevOverlay.width - 40;
            if (Width === -160) Width = -120;
            let slide = [];
            if (Width === 0) slide = [true, false, false, false]; 
            if (Width === -40) slide = [false, true, false, false]; 
            if (Width === -80) slide = [false, false, true, false]; 
            if (Width === -120) slide = [false, false, false, true]; 
            return {
                ...prevOverlay, 
                width: Width,
                slide0: slide[0],
                slide1: slide[1],
                slide2: slide[2],
                slide3: slide[3]
            }
        })
    }

    const previousOverlay = () => {
        setOverlay((prevOverlay) => {
            let Width = prevOverlay.width + 40;
            if (Width === 40) Width = 0;
            let slide = [];
            if (Width === 0) slide = [true, false, false, false]; 
            if (Width === -40) slide = [false, true, false, false]; 
            if (Width === -80) slide = [false, false, true, false]; 
            if (Width === -120) slide = [false, false, false, true]; 
            return {
                ...prevOverlay, 
                width: Width,
                slide0: slide[0],
                slide1: slide[1],
                slide2: slide[2],
                slide3: slide[3]
            }
        })
    }

    return (
        <div className="display-product">
            <div className="product-image-wrapper">
                <img src={overlay.displayImage} alt="" className="product-image" />
            </div>
            <div className="product-thumbnail-wrapper">
                <button onClick={() => handleDisplay(true, 0, product_1)} className={overlay.slide0 ? 'thumnail-button active-thumbnail' : 'thumnail-button'}>
                </button>
                <button onClick={() => handleDisplay(true, -40, product_2)} className={overlay.slide1 ? 'thumnail-button active-thumbnail' : 'thumnail-button'}>
                </button>
                <button onClick={() => handleDisplay(true, -80, product_3)} className={overlay.slide2 ? 'thumnail-button active-thumbnail' : 'thumnail-button'}>
                </button>
                <button onClick={() => handleDisplay(true, -120, product_4)} className={overlay.slide3 ? 'thumnail-button active-thumbnail' : 'thumnail-button'}>
                </button>
            </div>
            <div className="overlay-slide-container" style={{
                display: `${overlay.showOverlay ? 'grid' : 'none'}`
            }}>
                { !overlay.slide0 && 
                    <button className='previous-overlay' onClick={previousOverlay}>
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                    </button>
                }
                { !overlay.slide3 && 
                    <button className='next-overlay' onClick={nextOverlay}>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                    </button>
                }
                <div className="overlay-slide-wrapper">
                    <div className="overlay-close-wrapper">
                        <button className="close-overlay" onClick={hideOverlay}>
                            <svg width="14" height="15" viewBox='0 0 14 15' xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fill-rule="evenodd" className='close-overlay-icon'/></svg>
                        </button>
                    </div>
                    <div className="overlay-slide" style={{
                        marginLeft: `${overlay.width}vw`
                    }}>
                        <div className="overlay-image-wrapper">
                            <img src={product_1} alt="product" />
                        </div>
                        <div className="overlay-image-wrapper">
                            <img src={product_2} alt="product" />
                        </div>
                        <div className="overlay-image-wrapper">
                            <img src={product_3} alt="product" />
                        </div>
                        <div className="overlay-image-wrapper">
                            <img src={product_4} alt="product" />
                        </div>
                    </div>
                    <div className="overlay-thumbnail-wrapper">
                        <button type='button' className={overlay.slide0 ? 'overlay-thumbnail active-thumbnail' : 'overlay-thumbnail'}></button>
                        <button type='button' className={overlay.slide1 ? 'overlay-thumbnail active-thumbnail' : 'overlay-thumbnail'}></button>
                        <button type='button' className={overlay.slide2 ? 'overlay-thumbnail active-thumbnail' : 'overlay-thumbnail'}></button>
                        <button type='button' className={overlay.slide3 ? 'overlay-thumbnail active-thumbnail' : 'overlay-thumbnail'}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DisplayProduct;