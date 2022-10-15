import product_1 from '../images/image-product-1.jpg';
import product_2 from '../images/image-product-2.jpg';
import product_3 from '../images/image-product-3.jpg';
import product_4 from '../images/image-product-4.jpg';
import '../css/DisplayProduct.css';
import { useState } from 'react';

const DisplayProduct = () => {

    const IMAGES = [product_1, product_2, product_3, product_4];

    const [overlay, setOverlay] = useState({
        showOverlay: false,
        width: 0,
        displayImage: IMAGES[1],
        slide0: true,
        slide1: false,
        slide2: false,
        slide3: false
    });


    const handleDisplay = (Show, Width, Image) => {
        setOverlay((prevOverlay) =>{
            let slide = [];
            if (Width === 0) slide = [true, false, false, false]; 
            if (Width === -35) slide = [false, true, false, false]; 
            if (Width === -70) slide = [false, false, true, false]; 
            if (Width === -105) slide = [false, false, false, true]; 
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
    
    // reveal overlay 
    const revealOverlay = () => {
        setOverlay((prevOverlay) => {
            return {...prevOverlay, showOverlay: true}
        })
    }
    
    const nextOverlay = () => {
        setOverlay((prevOverlay) => {
            let Width = prevOverlay.width - 35;
            if (Width === -135) Width = -105;
            let slide = [];
            let image;
            if (Width === 0) {
                slide = [true, false, false, false]; image = IMAGES[0];
            }  else if (Width === -35) {
                slide = [false, true, false, false]; image = IMAGES[1];
            } else if (Width === -70) {
                slide = [false, false, true, false]; image = IMAGES[2];
            } else if (Width === -105) {
                slide = [false, false, false, true]; image = IMAGES[3];
            }  
            return {
                ...prevOverlay,
                displayImage: image,
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
            let Width = prevOverlay.width + 35;
            if (Width === 35) Width = 0;
            let image;
            let slide = [];
            if (Width === 0) {
                slide = [true, false, false, false]; image = IMAGES[0];
            } else if (Width === -35) {
                slide = [false, true, false, false]; image = IMAGES[1];
            } else if (Width === -70) {
                slide = [false, false, true, false]; image = IMAGES[2];
            } else if (Width === -105) {
                slide = [false, false, false, true]; image = IMAGES[3];
            }  
            return {
                ...prevOverlay, 
                displayImage: image, 
                width: Width,
                slide0: slide[0],
                slide1: slide[1],
                slide2: slide[2],
                slide3: slide[3]
            }
        })
    }

    console.log(overlay.displayImage);

    return (
        <div className="display-product">
            <div className="product-image-wrapper">
                <img src={overlay.displayImage} alt="" className="product-image" onClick={() => revealOverlay()} />
            </div>
            <div className="product-thumbnail-wrapper">
                <button onClick={() => handleDisplay(false, 0, product_1)} className={overlay.slide0 ? 'thumnail-button active-thumbnail' : 'thumnail-button'}>
                </button>
                <button onClick={() => handleDisplay(false, -35, product_2)} className={overlay.slide1 ? 'thumnail-button active-thumbnail' : 'thumnail-button'}>
                </button>
                <button onClick={() => handleDisplay(false, -70, product_3)} className={overlay.slide2 ? 'thumnail-button active-thumbnail' : 'thumnail-button'}>
                </button>
                <button onClick={() => handleDisplay(false, -105, product_4)} className={overlay.slide3 ? 'thumnail-button active-thumbnail' : 'thumnail-button'}>
                </button>
            </div>
            <div className="overlay-slide-container" style={{
                display: `${overlay.showOverlay ? 'grid' : 'none'}`
            }}>
                { !overlay.slide0 && 
                    <button className='previous-overlay' onClick={previousOverlay}>
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </button>
                }
                { !overlay.slide3 && 
                    <button className='next-overlay' onClick={nextOverlay}>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                    </button>
                }
                <div className="overlay-slide-wrapper">
                    <div className="overlay-close-wrapper">
                        <button className="close-overlay" onClick={hideOverlay}>
                            <svg width="14" height="15" viewBox='0 0 14 15' xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.354.782l4.595 4.596L11.596.782Z" fill="white" fillRule="evenodd" className='close-overlay-icon'/></svg>
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
                        <button onClick={() => handleDisplay(true, 0, product_1)} type='button' className={overlay.slide0 ? 'overlay-thumbnail active-thumbnail' : 'overlay-thumbnail'}></button>
                        <button onClick={() => handleDisplay(true, -35, product_1)} type='button' className={overlay.slide1 ? 'overlay-thumbnail active-thumbnail' : 'overlay-thumbnail'}></button>
                        <button onClick={() => handleDisplay(true, -70, product_1)} type='button' className={overlay.slide2 ? 'overlay-thumbnail active-thumbnail' : 'overlay-thumbnail'}></button>
                        <button onClick={() => handleDisplay(true, -105, product_1)} type='button' className={overlay.slide3 ? 'overlay-thumbnail active-thumbnail' : 'overlay-thumbnail'}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default DisplayProduct;