import React from 'react'
import { Link } from 'gatsby'


import { useStaticQuery, graphql } from "gatsby"
import SEO from '~/components/seo'
import ProductGrid from '~/components/ProductGrid'
import Img from "~/components/pic"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "cover_gosun.jpg"}) {
        childImageSharp {
          fluid {
          ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


return (
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <section class="project-page padding-y-xl">

      <ProductGrid />
    </section>
  </>
)
}

