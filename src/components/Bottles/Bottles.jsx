import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";

import './Bottles.css'
import { addToLocalStorage, getStoredCart, removeFromLocalStorage } from "../../utilites/localStorage";
import Cart from "../../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])


    

    useEffect(() => {
        //console.log(bottles.length);
        
        if (bottles.length) {
            const storedCart = getStoredCart();
            console.log(storedCart, bottles);

            const savedCart=[];

            for(const id of storedCart)
            {
                const bottle = bottles.find(bottle => bottle.id === id);
                
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            console.log('saved',savedCart);
            setCart(savedCart);
        }
    }, [bottles])


    const handelAddToCart = (bottle) => {
        console.log(bottle)
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id);
    }


    const handelRemove = id =>{
        // remove from Ui
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);


        // remove from Local Storage
        removeFromLocalStorage(id);
    }

    return (
        <div>
            <h3>Bottles Available : {bottles.length}</h3>
            <Cart 
            cart={cart}
            handelRemove={handelRemove}
            ></Cart>

            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handelAddToCart={handelAddToCart}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;