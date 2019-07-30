import PropTypes from "prop-types"
import React from "react"
import readingTime from "reading-time"
import Image from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import { rhythm, scale } from "../utils/typography"

function ShortBio({ post, hideAvatar, hideAuthor, hideDate, hideReadTime }) {
  return (
    <StaticQuery
      query={shortBioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        const { avatar } = data

        return (
          <div
            style={{
              display: `flex`,
            }}
          >
            <div>
              <p
                style={{
                  ...scale(-1.5 / 5),
                  display: `block`,
                  marginTop: rhythm(-1),
                  color: "grey",
                }}
              >
                {!hideDate && post.frontmatter.date}{" "}
                {!hideReadTime && <span>&#183;</span>}{" "}
                {!hideReadTime && readingTime(post.html).text}
              </p>
            </div>
          </div>
        )
      }}
    />
  )
}

ShortBio.propTypes = {
  post: PropTypes.object.isRequired,
  hideAuthor: PropTypes.bool,
  hideAvatar: PropTypes.bool,
  hideDate: PropTypes.bool,
  hideReadTime: PropTypes.bool,
}

ShortBio.defaultProps = {
  hideAuthor: false,
  hideAvatar: false,
  hideDate: false,
  hideReadTime: false,
}

const shortBioQuery = graphql`
  query ShortBioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default ShortBio
