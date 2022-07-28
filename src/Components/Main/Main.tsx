import CartList from "./CartList"
import TotalPrice from "./TotalPrice"

type SingleItem = {
    id: number
    name: string
    price: number
    amountInCart: number
 }

 type Props = {
    itemsInCart: SingleItem[]
    getTotalPrice: () => string
    addToCart:(item: SingleItem)=> void
    removeFromCart: (item: SingleItem)=> void
 }


function Main({itemsInCart, getTotalPrice, addToCart, removeFromCart}: Props ) {
    return (
        <main id="cart">

            <h2>Your Cart</h2>

            <div className="cart--item-list-container">
                <CartList itemsInCart={itemsInCart} addToCart={addToCart} removeFromCart={removeFromCart} />
            </div>

            <TotalPrice getTotalPrice={getTotalPrice} />

        </main>
    )
}

export default Main