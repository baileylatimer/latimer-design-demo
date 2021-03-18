import React from 'react'
import { StaticQuery, graphql,  useStaticQuery, Link } from 'gatsby'

const Footer= () => {
  const { allShopifyPage } = useStaticQuery(
    graphql`
    {
      allShopifyPage {
        nodes {
         
          title
          handle
        }
     
      }
    }`)
  
  return (
  

              <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>

                {allShopifyPage.nodes.map(({  title, handle }) => (
            <Link to={`/page/${handle}/`}>
           {title}
            </Link>
          
        ))}
              </footer>
           
  )
}


export default Footer
