import React from 'react';
import { useState } from 'react';

import VectorLeft from '../assets/web-component/Vector-left.png';
import VectorRight from '../assets/web-component/Vector-right.png';

const Slider = ({pictures}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const slideStyles = {
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${pictures[currentIndex]})`,
    }

    const sliderStyles ={
        height: "100%",
        position: 'relative',
        width: '100%',
    }

    const goToPrevious = () =>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const goToNext = () =>{
        const isLastSlide = currentIndex === pictures.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex  + 1
        setCurrentIndex(newIndex)
    }


    return (
        <div className="apartment-images">
            { pictures.length > 1 ? <div  style={sliderStyles}>
                <img  className='apartment-images__modifications left'   src={ VectorLeft} alt='left arrow' onClick={goToPrevious}/>
                <div className='apartment-cover__image' style={slideStyles}>
                    <span className='cover__images--length'>{currentIndex + 1 }/{pictures.length}</span>
                </div>
                <img className='apartment-images__modifications right' src={ VectorRight} alt='right arrow' onClick={goToNext}/>
            </div> : <div  style={sliderStyles}>
                <div className='apartment-cover__image' style={slideStyles}>
                </div>
            </div>   }
    </div>
    );
};

export default Slider;