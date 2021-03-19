import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql,  useStaticQuery, Link } from 'gatsby'
import styled from '@emotion/styled'

import ContextProvider from '~/provider/ContextProvider'

import { GlobalStyle } from '~/utils/styles'
import Navigation from '~/components/Navigation'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
    {
      allShopifyPage {
        nodes {
          title
          handle
        }
      }
  
 
          site {
            siteMetadata {
              title
            }
          }
        
      }

   `)
  
  return (
    <ContextProvider>
      <GlobalStyle />
        <div class="noise"></div>
        <Navigation siteTitle={data.site.siteMetadata.title} />
          <div>
            
            <Wrapper>
              {children}


              <footer>
             
{/* 
<ul>
                {data.allShopifyPage.nodes.map(({  title, handle }) => (
          
          <li><Link to={`/page/${handle}/`}>
           {title}
            </Link></li>
          
        ))}</ul> */}

{/* © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a> */}
              </footer>
            </Wrapper>
          </div>
    
    
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
