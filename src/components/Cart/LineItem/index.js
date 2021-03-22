import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'
import { Wrapper } from './styles'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="100px"
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  return (
    <Wrapper className="width-100% flex justify-between">
      <div className="flex">
        {variantImage}
        <p className="margin-y-xs margin-x-sm">
          {line_item.title}
          {`  `}
          {line_item.variant.title === !'Default Title'
            ? line_item.variant.title
            : ''}
        </p>
        {/* {selectedOptions} */}

      </div>
      <div className="flex">
        <p className="margin-y-xs margin-right-sm">
          {line_item.quantity}
        </p>
        <button className="link-btn" onClick={handleRemove}>[x]</button>
      </div>

    </Wrapper>
  )
}

export default LineItem
