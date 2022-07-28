import StoreList from "./StoreList"

type SingleItem = {
    id: number
    name: string
    price: number
    amountInCart: number
 }


 type Props = {
    store: SingleItem []
    getImagePath: (item: SingleItem) => string
    addToCart:(item: SingleItem)=> void
}

function Header({store, addToCart}: Props) {
    return (
        <header id="store">
            <h1>Grocero</h1>
            <StoreList store={store} addToCart={addToCart}/>
        </header>
    )
}

export default Header