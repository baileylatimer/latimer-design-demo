import React, { useContext } from 'react'
import {  graphql, Link } from 'gatsby'
import StoreContext from '~/context/StoreContext'
import {
  Grid,
  Product,
  Title,
  PriceTag
} from '~/components/ProductGrid/styles'
import { Img } from '~/utils/styles'
const CollectionPage = ({ data })=> {
    const collection = data.shopifyCollection
    const { store: {checkout} } = useContext(StoreContext)
   console.log(collection.products)


    const getPrice = price => Intl.NumberFormat(undefined, {
        currency: checkout.currencyCode ? checkout.currencyCode : 'EUR',
        minimumFractionDigits: 2,
        style: 'currency',
      }).format(parseFloat(price ? price : 0))
    
    return (
        <div>
    <h1>{collection.title}</h1>
   
    <Grid>
      {collection.products.length > 0
        ?
        
        collection.products.map(({ id, handle, title, images: [firstImage], variants: [firstVariant] } ) => (
          <Product key={id} >
            <Link to={`/product/${handle}/`}>
              {firstImage && firstImage.localFile &&
                (<Img
                  fluid={firstImage.localFile.childImageSharp.fluid}
                  alt={handle}
                />)}
            </Link>
            <Title>{title}</Title>
            <PriceTag>{getPrice(firstVariant.price)}</PriceTag>
          </Product>
        ))
        : <p>No Products found!</p>}
    </Grid>
    </div>
    )


} 
export const query = graphql`
query($handle: String!) {
    
    shopifyCollection(handle: { eq: $handle }) {
    
        title

        products {
          
          
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
  
`

export default CollectionPage