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


  return (
    <div className="App">

      <Header store= {store} getImagePath={getImagePath} />
      <Main />
    </div>
  )
}

export default App
