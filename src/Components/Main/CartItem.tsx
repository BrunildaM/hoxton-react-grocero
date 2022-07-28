import { getImagePath } from "../Header/StoreItem"



function CartItem({item}: any) {
    return (
        <li >
        <img className="cart--item-icon" alt={item.name} src={getImagePath(item)} />
        <p>{item.name.toUpperCase()}</p>
        <button className="quantity-btn remove-btn center">
          -
        </button>
        <span className="quantity-text center">{item.amountInCart}</span>
        <button className="quantity-btn add-btn center">
          +
        </button>
      </li>
    )
}

export default CartItem


