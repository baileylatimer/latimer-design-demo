import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'
import Timezone from '~/components/date'

import StoreContext from '~/context/StoreContext'
import {
	CartCounter, 
	Container,
	MenuLink,
	Wrapper
} from './styles'

const useQuantity = () => {
	const { store: {checkout} } = useContext(StoreContext)
	const items = checkout ? checkout.lineItems : []
	const total = reduce(items, (acc, item) => acc + item.quantity, 0)
	return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

	return(
	<header className="width-100vw border-bottom position-fixed z-index-3">
			<Container>
				<MenuLink className="glitch color-contrast-higher" data-text={siteTitle} to='/'>
					{siteTitle}
				</MenuLink>
        <span className="hide show@md">32.7157° N, 117.1611° W</span>
        <Timezone />
       
				<MenuLink className="color-contrast-higher" to='/cart'>
					{hasItems &&
						<CartCounter>
							{quantity}
						</CartCounter>
					}
					Cart&nbsp;
				</MenuLink>
			</Container>
	</header>
	)
}

Navigation.propTypes = {
	siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
	siteTitle: ``,
}

export default Navigation
