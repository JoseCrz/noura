import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const BackgroundImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "hero-img.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data.placeholderImage.childImageSharp.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default BackgroundImage
