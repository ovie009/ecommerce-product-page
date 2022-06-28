import '../css/Slide.css';
import image1 from '../images/image-product-1.jpg';
import image2 from '../images/image-product-2.jpg';
import image3 from '../images/image-product-3.jpg';
import image4 from '../images/image-product-4.jpg';
import next from '../images/icon-next.svg';
import previous from '../images/icon-previous.svg';
import { useState } from 'react';

const Slide = () => {

    const [endOfSlide, setEndOfSlide] = useState(false);
    const [startOfSlide, setStartOfSlide] = useState(true);
    const [slideWidth, setSlideWodth] = useState(0);

    const handleSlideWidth = (direction) => {
        if (direction === 'next') {
            setSlideWodth(prevSlideWidth => {

                setStartOfSlide(false);
                if (prevSlideWidth === -200) setEndOfSlide(true);
                if (prevSlideWidth !== -200) setEndOfSlide(false);
                return prevSlideWidth -= 100;
            })
        } else if (direction === 'previous') {
            setSlideWodth(prevSlideWidth => {
                setEndOfSlide(false);
                if (prevSlideWidth === -100) setStartOfSlide(true);
                if (prevSlideWidth !== -100) setStartOfSlide(false);
                return prevSlideWidth += 100;
            })
        }
    }

    return (  
        <div className="slide">
            { !startOfSlide && 
                <button className="slide-previous" onClick={() => handleSlideWidth('previous')}>
                    <img src={previous} alt="previous icon" />
                </button>
            }
            
            {   !endOfSlide &&
                <button className="slide-next" onClick={() => handleSlideWidth('next')}>
                    <img src={next} alt="next icon" />
                </button>
            }
            <div className="slide-wrappper" style={{
                left: `${slideWidth}vw`
            }}>
                <div className="slides">
                    <img src={image1} alt="shoe product 1" />
                </div>
                <div className="slides">
                    <img src={image2} alt="shoe product 2" />
                </div>
                <div className="slides">
                    <img src={image3} alt="shoe product 3" />
                </div>
                <div className="slides">
                    <img src={image4} alt="shoe product 4" />
                </div>
            </div>
        </div>
    );
}
 
export default Slide;