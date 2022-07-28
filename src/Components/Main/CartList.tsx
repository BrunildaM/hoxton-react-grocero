import CartItem from "./CartItem"

type SingleItem = {
    id: number
    name: string
    price: number
    amountInCart: number
 }

 type Props = {
    itemsInCart: SingleItem[]
    addToCart:(item: SingleItem)=> void
    removeFromCart: (item: SingleItem)=> void
 }

 


function CartList({itemsInCart, addToCart, removeFromCart}: Props) {
    
    return (
        <ul className="item-list cart--item-list">
            {itemsInCart.map(item =>
                <CartItem key={item.id} item={item} addToCart={addToCart} removeFromCart={removeFromCart}/>
                ) }
            
        </ul>
    )
}

export default CartList