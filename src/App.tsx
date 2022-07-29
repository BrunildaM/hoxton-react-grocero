import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { getImagePath } from './Components/Header/StoreItem'
import Main from './Components/Main/Main'
import initialStore from './store'


type SingleItem = {
  id: number
  name: string
  price: number
  amountInCart: number
}




function App() {

  const[store, setStore] = useState(initialStore)

  let itemsInCart = store
   itemsInCart = itemsInCart.filter(item => item.amountInCart > 0)

   function getTotalPrice() {
    let total = 0

    for (const item of itemsInCart){
    total +=  item.price * item.amountInCart
    }
  
    return total.toFixed(2)
  }

  function addToCart(item:SingleItem) {
    let storeCopy = JSON.parse(JSON.stringify(store))
    const match = storeCopy.find((itemInCart: SingleItem) => itemInCart.id === item.id)
    if(match) {
      match.amountInCart++
    } else {
      const itemCopy = {...item, amountInCart: 1}
      storeCopy.push(itemCopy)
    }
    setStore(storeCopy)
  }


  function removeFromCart (item:SingleItem) {
    let storeCopy = JSON.parse(JSON.stringify(store))
    const match = storeCopy.find((itemInCart: SingleItem) => itemInCart.id === item.id)
      match.amountInCart--
  
    setStore(storeCopy)

  }


  return (
    <div className="App">

      <Header store= {store} getImagePath={getImagePath} addToCart={addToCart} />
      <Main itemsInCart={itemsInCart} getTotalPrice={getTotalPrice} addToCart={addToCart} removeFromCart={removeFromCart}/>
    </div>
  )
}

export default App
