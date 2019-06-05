import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class PodcastIndex extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const maxWidth = rhythm(27)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='About' keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingLeft: rhythm(1), paddingRight: rhythm(1) }}>
          <div style={{ maxWidth: maxWidth }}>
            <br/>
            <br/> I am still working on this page, but for now you can go <a href='https://anchor.fm./compileswift'>direct to the Podcast episodes list here.</a>
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
