import CartItem from "./CartItem"

type SingleItem = {
    id: number
    name: string
    price: number
    amountInCart: number
 }

 type Props = {
    itemsInCart: SingleItem[]
 }

 


function CartList({itemsInCart}: Props) {
    
    return (
        <ul className="item-list cart--item-list">
            {itemsInCart.map(item =>
                <CartItem key={item.id} item={item} />
                ) }
            
        </ul>
    )
}

export default CartList