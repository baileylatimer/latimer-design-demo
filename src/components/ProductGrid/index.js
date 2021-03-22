import React, { useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import StoreContext from '~/context/StoreContext'
import {
  Grid,
  Product,
  Title,
  PriceTag
} from './styles'
import { Img } from '~/utils/styles'

const ProductGrid = () => {
  const { store: {checkout} } = useContext(StoreContext)
  const { allShopifyProduct } = useStaticQuery(
    graphql`
      query {
        allShopifyProduct(
          sort: {
            fields: [createdAt]
            order: DESC
          }
        ) {
          edges {
            node {
              id
              title
              handle
              createdAt
              images {
                id
                originalSrc
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              variants {
                price
              }
            }
          }
        }
      }
    `
  )

  const getPrice = price => Intl.NumberFormat(undefined, {
    currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
    minimumFractionDigits: 0,
    style: 'currency',
  }).format(parseFloat(price ? price : 0))

  return (
    <Grid>
      {allShopifyProduct.edges
        ? allShopifyProduct.edges.map(({ node: { id, handle, title, images: [firstImage], variants: [firstVariant] } }) => (
          <Product className="prod-card" key={id} >
            <Link className="prod-card__img-link" to={`/product/${handle}/`}>
              <figure className="prod-card__img">
              {firstImage && firstImage.localFile &&
                  (<Img
                    fluid={firstImage.localFile.childImageSharp.fluid}
                    alt={handle}
                  />)}
                </figure>
            </Link>
            <div>
              <Link to={`/product/${handle}/`}>{title}</Link>
              <div >
                <PriceTag className="prod-card__price">{getPrice(firstVariant.price)}</PriceTag>
              </div>
            </div>
          </Product>
        ))
        : <p>No Products found!</p>}
    </Grid>
  )
}

export default ProductGrid
