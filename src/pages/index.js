import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import ShortBio from "../components/ShortBio"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const maxWidth = rhythm(27)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Welcome"
          keywords={[`blog`, `gatsby`, `javascript`, `react`, 'swift', 'development',
          'ios', 'macos', 'watchos', 'podcast', 'programming', 'software']}
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
          <div style={{ maxWidth: maxWidth, marginTop: 20 }}>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Link
                  style={{
                    boxShadow: `none`,
                    color: "#000000",
                    fontWeight: "bold",
                  }}
                  to={node.fields.slug}
                >
                  <div key={node.fields.slug} style={{
                    borderWidth: 1,
                    borderStyle: "solid", borderRadius: 10, borderColor: "#e65812",
                    marginTop: 20,
                    marginBottom: 20, paddingLeft: 10, paddingRight: 10,
                    boxShadow: "0px 0px 10px 2px rgba(176,176,176,0.5)",
                    backgroundColor: "#ffffff",
                  }}>
                  <h3
                    style={{
                      ...scale(1 / 1.5),
                      marginBottom: rhythm(1 / 4),
                      marginTop: 3,
                    }}
                  >
                      {title}
                  </h3>
                  <p
                    style={{
                      ...scale(0 / 5),
                      color: "#666666",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                  <br />
                  <ShortBio post={node} hideAvatar hideAuthor />
                </div>
                </Link>

              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

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
