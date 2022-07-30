const intialValue = {
    cart: [],
    total: 0
}

const rootReducer = (state = intialValue, action) => {
    switch(action.type) {
        case "cart/add":
            const newCart = [...state.cart, action.payload]
            return {
                ...state,
                cart: newCart,
                total: newCart.reduce((accu, item) => accu + item.saleOffPrice, 0)
            };
        case "cart/increase":
            const id = action.payload
            const newCarts = state.cart.map(item =>{
                if(item.id === id){
                    const amount = item.amount ? item.amount +1:2;
                    return {
                        ...item,
                        amount: amount,
                        total: amount * item.saleOffPrice
                    }
                }
            })
        default: 
            return state
    }
}

export default rootReducer