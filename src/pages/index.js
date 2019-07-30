import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import ShortBio from "../components/ShortBio"
import { Helmet } from "react-helmet/es/Helmet"

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
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Helmet>
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
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <div key={node.fields.slug}>
                  <h3
                    style={{
                      ...scale(1 / 1.5),
                      marginBottom: rhythm(1 / 4),
                    }}
                  >
                    <Link
                      style={{
                        boxShadow: `none`,
                        color: "#000000",
                        fontWeight: "bold",
                      }}
                      to={node.fields.slug}
                    >
                      {title}
                    </Link>
                  </h3>
                  <p
                    style={{
                      ...scale(1 / 5),
                      color: "#666666",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                  <br />
                  <ShortBio post={node} hideAvatar hideAuthor />
                </div>
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
