import { useSelector } from "react-redux"


function Counter (){
    const count = useSelector(state => state.cart.items[itemId]?.count || 0)
}
