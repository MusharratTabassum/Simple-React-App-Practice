import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';
import './Jobplace.css'

const Jobplace = () => {
    const [developers, setDevelopers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./developers.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, []);
    const handleAddToCart = (developer) => {
        const newCart = [...cart, developer];
        setCart(newCart);
    }
    return (
        <div >
            <div className="recrutement-container">
                <div className="developer-place">
                    {
                        developers.map(developer => <Developer
                            key={developer.key}
                            developer={developer}
                            handleAddToCart={handleAddToCart}
                        >
                        </Developer>)
                    }
                </div>
                <div className='order'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>


        </div>
    );
};

export default Jobplace;