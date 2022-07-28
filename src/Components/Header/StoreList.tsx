import StoreItem from "./StoreItem"

type SingleItem = {
    id: number
    name: string
    price: number
    amountInCart: number
 }


 type Props = {
    store: SingleItem []
}


function StoreList({store}: Props) {
    return (
        <ul className="item-list store--item-list">
             {store.map ((item: { id: number; name: string; price: number; amountInCart: number }) =>
            <StoreItem key={item.id} item={item} />
             )}
        </ul>
    )
}

export default StoreList