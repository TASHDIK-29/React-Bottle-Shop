import PropTypes from 'prop-types';

import './Cart.css'

const Cart = ({cart, handelRemove}) => {
    return (
        <div className="cart-container">
            <h3>Cart : {cart.length}</h3>
            {
                cart.map(bottle => <div key={bottle.id}>
                    <img  src={bottle.img}></img>
                    <button onClick={()=> handelRemove(bottle.id)}>Remove</button>
                </div> )
            }
        </div>
    );
};

Cart.propTypes={
    cart : PropTypes.array.isRequired,
    handelRemove : PropTypes.func.isRequired
}

export default Cart;