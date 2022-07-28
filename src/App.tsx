import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { getImagePath } from './Components/Header/StoreItem'
import Main from './Components/Main/Main'
import initialStore from './store'





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


  return (
    <div className="App">

      <Header store= {store} getImagePath={getImagePath} />
      <Main itemsInCart={itemsInCart} getTotalPrice={getTotalPrice} />
    </div>
  )
}

export default App
