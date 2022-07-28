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
 }


function Main({itemsInCart}: Props ) {
    return (
        <main id="cart">

            <h2>Your Cart</h2>

            <div className="cart--item-list-container">
                <CartList itemsInCart={itemsInCart} />
            </div>

            <TotalPrice />

        </main>
    )
}

export default Main