import StoreItem from "./StoreItem"

type SingleItem = {
    id: number
    name: string
    price: number
    amountInCart: number
 }


 type Props = {
    store: SingleItem []
    addToCart: (item: SingleItem)=> void
}


function StoreList({store, addToCart}: Props) {
    return (
        <ul className="item-list store--item-list">
             {store.map ((item: { id: number; name: string; price: number; amountInCart: number }) =>
            <StoreItem key={item.id} item={item}  addToCart={addToCart}/>
             )}
        </ul>
    )
}

export default StoreList