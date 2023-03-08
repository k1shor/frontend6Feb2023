import Swal from "sweetalert2";
import { ADD_ITEMS, CLEAR_CART, REMOVE_ITEMS } from "./cartConstants";

export const cartReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case ADD_ITEMS:
            const itemExists = state.cart_items.find(item => item.product === action.payload.product)
            if (itemExists) {
                if(action.payload.quantity === 1){
                    Swal.fire('Alert!', `${action.payload.product_name} is already in cart`, 'warning')
                    return { ...state }
                }
                else{
                    if(itemExists.quantity<action.payload.quantity){
                        Swal.fire({
                            title:"success",
                            html: "quantity increased",
                            icon:"success",
                            timer:3000,
                            position:'top-right'
                        })
                    }                
                    else{
                        Swal.fire({
                            title:"success",
                            html: "quantity decreased",
                            icon:"success",
                            timer:3000,
                            position:'top-right'
                        })
                    }
                    return {...state, cart_items: state.cart_items.map(item=> item.product === action.payload.product ? action.payload : item)}
                }
            }
            // [samsung -2, apple -3 , lenovo-1]
            // samsung -1 - item already in cart
            // samsung -3: samsung-3, apple-3, lenovo-1
            else {
                Swal.fire('Congrats!', `${action.payload.product_name} added to cart`, 'success')
                return { ...state, cart_items: [...state.cart_items, action.payload] }
            }

        case REMOVE_ITEMS:
            Swal.fire({
                title:"success",
                html: "item removed",
                icon:"success",
                timer:3000,
                position:'top-right'
            })
            return { ...state, cart_items: state.cart_items.filter(item=>item.product!==action.payload) }

        case CLEAR_CART:
            return { ...state }

        default:
            return { ...state }
    }
}