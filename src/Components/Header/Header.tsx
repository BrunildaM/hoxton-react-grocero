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
}

function Header({store}: Props) {
    return (
        <header id="store">
            <h1>Grocero</h1>
            <StoreList store={store}/>
        </header>
    )
}

export default Header