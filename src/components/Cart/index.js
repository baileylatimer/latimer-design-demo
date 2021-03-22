import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import LineItem from './LineItem'

const Cart = () => {
  const {
    store: { checkout },
    
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const line_items = checkout.lineItems.map(line_item => {
    return <LineItem key={line_item.id.toString()} line_item={line_item} />
  })

  return (
    <div className="flex flex-column flex-row@md justify-between ">
      <div  className="col-6@md margin-right-md">
        {line_items}
      </div>

      <div class="col-4@md">
      
        <div class="cart__subtotal flex flex-column justify-center">
          <p class="flex justify-between"><span>Subtotal</span> <span>$ {Math.round(checkout.subtotalPrice)}</span></p>
          <button class="link-btn text-center" onClick={handleCheckout} disabled={checkout.lineItems.length === 0}>Check out  &rarr;</button>
          {/* <p class="color-contrast-medium text-sm text-center display@md">Shipping &amp; taxes calculated at checkout</p> */}
        </div>
      </div>
    </div>

  )
}

export default Cart
