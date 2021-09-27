import React from 'react';
import './Developer.css'

const Developer = (props) => {
    const { name, img, fee, availibility, country, experties } = props.developer;
    return (
        <div className="developer">
            <div>
                <img className='photo' src={img} alt="" />
                <h4 className="product-name">Name : {name}</h4>
                <p><small>Fees: ${fee}</small></p>
                <p>From : {country}</p>
                <p>Experties : {experties}</p>
                <p>Availability: {availibility}</p>
                <button
                    onClick={() => props.handleAddToCart(props.developer)}
                    className="btn-regular"
                > add</button>
            </div>
        </div>
    );
};

export default Developer;