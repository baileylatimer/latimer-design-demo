import React from 'react'

import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'

const CartPage = () => (
  <Container className="padding-top-xl">
    <h1>Your cart</h1>
    <Cart />
  </Container>
)

export default CartPage
