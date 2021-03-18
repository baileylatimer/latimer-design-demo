import React from 'react'
import { graphql } from 'gatsby'
import renderHTML from "react-render-html"

const PolicyPage = ({ data })=> {
    const page = data.shopifyBlog

   
    return (
        <div>
    <h1>{page.title}</h1>
   
  
    </div>
    )


} 
export const query = graphql`
query($url: String!) {
    
    shopifyBlog(url: { eq: $url }) {
    
      title
      internal {
        content
      }
    }
  }
  
`

export default PolicyPage