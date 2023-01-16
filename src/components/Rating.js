import React from 'react';
import FullStar from '../assets/web-component/full-star.png';
import EmptyStar from '../assets/web-component/empty-star.png';


const Rating = ({ratingValue}) => {
   const rating = [1, 2, 3, 4, 5]
   const ratingValues = ratingValue === 'rating' ? '' : (<img src={EmptyStar} alt='empty star' />)

    return (
        <div className='rating-stars'>
            {rating.map((star) => ratingValue >= star ?
                                                    <span key={star.toString()}>
                                                       <img src={FullStar} alt='full star icon'/>
                                                    </span>
                                                        :
                                                        <span key={star.toString()}>{ratingValues}</span>)}

        </div>
    );
};


export default Rating;


