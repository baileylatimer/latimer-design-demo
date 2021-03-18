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
    <section class="project-page padding-x-sm">
      <figure class="hero">
      <Img style={{ height: "100%", width: "100%" }} imgStyle={{ objectFit: "cover" }} fluid={data.file.childImageSharp.fluid} alt="Image one" />
      </figure>
      <ProductGrid />
    </section>
  </>
)
}

