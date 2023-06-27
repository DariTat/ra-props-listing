import React from "react"

type Item = {
    listining_id: number,
    url: string,
    MainImage: string,
    title: string,
    currency_code: string,
    price: string,
    quantity: number
}

type ItemProps = {
    item: Item
}

const ItemShow:React.FC<ItemProps> = ({item: {listining_id, url, MainImage, title, currency_code, price, quantity }}) => {
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
        <React.Fragment key={listining_id}>
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage} alt=''/>
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

export default function Listing({items}) {
   const offers: Item[] = items
   console.log(offers)
   return (
    <div className="item-list">
        {offers.map((item, key) => <ItemShow item={item}/>)}
    </div>
   )
   
}