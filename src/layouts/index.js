import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql,  useStaticQuery, Link, navigate } from 'gatsby'
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
            </Wrapper>
          </div>
          <footer className="width-100vw border-top position-fixed z-index-3">
              <button className="link-btn" onClick={() => { navigate(-1) }}>← Go back</button>
            {/* 
            <ul>
              {data.allShopifyPage.nodes.map(({  title, handle }) => (
              <li><Link to={`/page/${handle}/`}>
              {title}
                </Link></li>
            ))}</ul> */}
            <div className="flex">
              © {new Date().getFullYear()}<span className="hide show@md">, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a> + <a href="https://www.shopify.com">Shopify</a>
              </span>
            </div>
          </footer>
    
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
