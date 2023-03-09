import { API } from "../config"

export const getStripeKey = () => {
    return fetch(`${API}/getStripeKey`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}