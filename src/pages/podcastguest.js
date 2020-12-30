import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class PodcastIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = "CompileSwift"
    const maxWidth = rhythm(27)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Podcast"
          keywords={["podcast", "submission", "swift", "swiftui"]}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            paddingLeft: rhythm(1),
            paddingRight: rhythm(1),
          }}
        >
          <div style={{ maxWidth: maxWidth }}>
            <br />
            <br />
            <p>
              Do you have something you think would be great to share with the
              CompileSwift audience? Whether it's a project, an application, or
              just to talk about Swift and Apple development, you found the
              right form.
            </p>
            <p>
              Please provide as many details as possible and I will respond as
              quickly as I can. Make sure you enter a valid email address so I
              can reach you.
            </p>
            <br />
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfYYh7hZNDXLycNd4g6IJp0tbXQt-UkGP5aqRb6fHhBSPXbCg/viewform?embedded=true"
              width="640"
              height="1088"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PodcastIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
