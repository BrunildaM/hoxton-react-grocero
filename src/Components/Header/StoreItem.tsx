type SingleItem = {
    id: number
    name: string
    price: number
    amountInCart: number
 }



type Props = {
    item: SingleItem
}


export function getImagePath (item: SingleItem) {
    const imgId = item.id.toString().padStart(3, "0")
    const imgName = item.name
  
    return `/assets/icons/${imgId}-${imgName}.svg`
  }

function StoreItem({item}:Props) {
    return (
        <li>
            <div className="store--item-icon">
                <img alt={item.name} src= {getImagePath(item)}/>
            </div>
            <button>Add to cart</button>
        </li>
    )
}

export default StoreItem