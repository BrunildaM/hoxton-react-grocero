import CartList from "./CartList"
import TotalPrice from "./TotalPrice"


function Main() {
    return (
        <main id="cart">

            <h2>Your Cart</h2>

            <div className="cart--item-list-container">
                <CartList />
            </div>

            <TotalPrice />

        </main>
    )
}

export default Main