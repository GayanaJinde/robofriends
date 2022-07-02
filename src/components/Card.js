import React from 'react';

const Card = ({name, email, id }) => {
    
    return(
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 '>
            <img alt='robos' src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2 style={{fontFamily: "Cambria", color: "wheat"}}>{name}</h2>
                <p style={{color: "wheat"}}>{email}</p>
            </div>
        </div>
    );
}

export default Card;