import { getImagePath } from "../Header/StoreItem"



function CartItem({item, addToCart, removeFromCart}: any) {
    return (
        <li >
        <img className="cart--item-icon" alt={item.name} src={getImagePath(item)} />
        <p>{item.name.toUpperCase()}</p>
        <button className="quantity-btn remove-btn center"
        onClick={() => removeFromCart(item)}>
          -
        </button>
        <span className="quantity-text center">{item.amountInCart}</span>
        <button className="quantity-btn add-btn center"
        onClick={() => addToCart(item)}>
          +
        </button>
      </li>
    )
}

export default CartItem


