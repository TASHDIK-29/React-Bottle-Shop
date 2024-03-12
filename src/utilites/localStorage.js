const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart');
    if(storedCartString)
    {
        return JSON.parse(storedCartString);
    }
    return [];
}


const saveToLocalStorage = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}


const addToLocalStorage = id =>{
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    saveToLocalStorage(cart);
}


const removeFromLocalStorage = id =>{
    const cart = getStoredCart();
    const newCart = cart.filter(bottleId => bottleId !== id);
    saveToLocalStorage(newCart);
}

export { addToLocalStorage, getStoredCart, removeFromLocalStorage }