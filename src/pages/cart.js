import React from 'react'

import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'

const CartPage = () => (
  <Container className="padding-top-xxl">
    <h1 className="color-contrast-higher">Your cart</h1>
    <Cart />
  </Container>
)

export default CartPage
