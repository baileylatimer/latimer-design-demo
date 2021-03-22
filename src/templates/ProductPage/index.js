import React from 'react'
import { graphql, useStaticQuery, Link, navigate} from 'gatsby'

import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import {
  Img,
  Container,
  TwoColumnGrid,
  GridLeft,
  GridRight,
} from '~/utils/styles'
import {
  ProductTitle,
  ProductDescription
} from './styles'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
const collection = data.shopifyCollection
console.log(collection)
  
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Container className="padding-top-xxl">
        
        <TwoColumnGrid>
          <GridLeft>
            {product.images.map(image => (
              <Img
                fluid={image.localFile.childImageSharp.fluid}
                key={image.id}
                alt={product.title}
              />
            ))}
          </GridLeft>
          <GridRight>
            <ProductTitle className="glitch margin-bottom-sm text-xxxl  color-contrast-higher">{product.title}</ProductTitle>
            <ProductDescription
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
            <ProductForm product={product} />
          </GridRight>
        </TwoColumnGrid>
        {/* {collection && 
                    <Link to={`/collection/${collection.handle}`}>{collection.title}</Link>
        } */}
      </Container>
    </>
  )
}

export const query = graphql`
  query($handle: String! $shopifyId: String) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    shopifyCollection(products: {elemMatch: {shopifyId: {eq: $shopifyId}}}) {
      title
      handle
    }
  }
`

export default ProductPage
