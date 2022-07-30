const intialValue = {
    cart: [],
    total: 0
}

const rootReducer = (state = intialValue, action) => {
    switch(action.type) {
        case "cart/add":
            return {
				...state,
				cart: [...state.cart, action.payload],
			};
        case "cart/increase":
            const id = action.payload
            const newCart = state.cart.map(item =>{
                if(item.id === id){
                    const amount = item.amount ? item.amount +1:2;
                    return {
                        ...item,
                        amount: amount,
                        total: amount * item.saleOffPrice
                    }
                }
            })
            return {
				...state,
				cart: newCart
			}
        default: 
            return state
    }
}

export default rootReducer