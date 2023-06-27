//import Listing from './components/Listing'
import data from './data/etsy.json'
import './App.css'
import React from 'react'


type Item = {
  listing_id: number,
  url: string,
  MainImage: string,
  title: string,
  currency_code: string,
  price: string,
  quantity: number
  state: string
}

type ItemProps = {
  item: Item
}

const items: Item[] = data;


const ItemShow:React.FC<ItemProps> = ({item: {listing_id, url, MainImage, title, currency_code, price, quantity, state }}) => {
  if (state !== 'active') {
    return null
  }
  
  let count: string 
  if (quantity <= 10) {
      count = 'level-low'
  } else if (quantity <= 20) {
      count = 'level-medium'
  } else if (quantity > 20) {
      count = 'level-high'
  }
  let code: string
  if (currency_code === 'USD') {
      code = '$' 
  } else if (currency_code === 'EUR') {
      code = '€'
  } else {
      code = currency_code
  }
  
  return (
      <React.Fragment key={listing_id}>
      <div className="item">
          <div className="item-image">
              <a href={url}>
                  <img src={MainImage.url_570xN} alt=''/>
              </a>
          </div>
          <div className="item-details">
              <p className="item-title">{title.length > 50 ? `${title.slice(0, 50)}...` : title}</p>
              <p className="item-price">{price} {code}</p>
              <p className={`item-quantity ${count}`} >{quantity} left</p>
          </div>
      </div>

      </React.Fragment>
      
  )
}

const Listing:React.FC = () => {
  return (
    <div className="item-list">
        {items.map((item) => <ItemShow item={item}/>)}
    </div>
   )
}
function App() {
  return (
    <>
      <Listing />
    </>
  )
}

export default App
