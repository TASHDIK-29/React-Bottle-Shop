import PropTypes from 'prop-types'; 

import './Bottle.css'

const Bottle = ({bottle, handelAddToCart}) => {

    // console.log(bottle)
    const{name, img, price} = bottle;
    return (
        <div className="bottle">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>price : ${price}</p>
            <button onClick={()=> handelAddToCart(bottle)}>Purchase</button>
        </div>
    );
};


Bottle.propTypes={
    bottle : PropTypes.object.isRequired,
    handelAddToCart : PropTypes.func.isRequired
}


export default Bottle;