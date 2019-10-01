import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'

class VideoList extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const maxWidth = rhythm(27)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='About' keywords={[`blog`, `swift`, `podcast`]} />
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingLeft: rhythm(1), paddingRight: rhythm(1) }}>
        <div style={{
            width: "100%", marginTop: 20,
            flexDirection: "row", display: "flex", flexWrap: "wrap", justifyContent: "center",
          }}>
            <br/>
            <br/>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
               return (
                 <Link style={{ boxShadow: `none`, color: '#ffffff', fontWeight: 'bold' }} to={node.fields.slug}>
                 <div key={node.fields.slug} style={{ maxWidth: 400, minWidth: 400, minHeight: 180, maxHeight: 180, borderStyle: 'none', borderRadius: 10, margin: '20px 10px 20px 10px', paddingLeft: 10, paddingRight: 10, boxShadow: '0px 0px 10px 0 rgba(0,0,0,0.3)', backgroundColor: 'rgb(44, 70, 103)' }}>
                 <h3
                    style={{
                      ...scale(1 / 1.7),
                      marginBottom: rhythm(1 / 4),
                      marginTop: 3,
                    }}
                  >
                      {title}
                  </h3>
                  <p
                    style={{
                      ...scale(0 / 5),
                      color: "white",
                      fontWeight: "normal",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                  <br />
                </div>
                 </Link>
               )
             })}
          </div>
        </div>
      </Layout>
    )}
}

export default VideoList

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: {
      frontmatter: {
        tags: { in: ["Video"] }
      }
    }
  ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
  }
`
