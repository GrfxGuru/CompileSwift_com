import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render () {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const maxWidth = rhythm(27)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='About' keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingLeft: rhythm(1), paddingRight: rhythm(1) }}>
          <div style={{ maxWidth: maxWidth }}>
            <h1>An Idea Born From Need</h1>
            <p>
              CompileSwift is an idea I had the moment Apple announced the language in 2014. I knew I wanted to learn all about the language as my full gateway into creating iOS
              applications.
            </p>
            <p>
              I also knew that I wanted to embrace my passion of sharing with others, so to that end I started blogging my progress by way of posts for others to learn from. At
              the time, I was not sure how far this idea would go so I kept it under my own personal site rather than branch it out, even though I had a domain name for
              it.
            </p>
            <p>
              As an experienced developer for way too many years in other languages and technologies like Web and Kiosks, I wanted to really start this project from the ground
              up so that readers of all levels could benefit. So you will find the very basic things to the more complicated things across the content.
            </p>
            <p>
              The idea here is that this is more about sharing information with anyone interested, and given that Swift is open source, I always wanted that to mean open and honest
              learning, even when it goes wrong.
            </p>
            <p>
              I am not ashamed to admit as a developer that I sometimes make terrible decisions in my code, but that's why we learn and help each other to improve.
            </p>
            <h2>Want To Talk?</h2>
            <p>
              Great! Head over to the contact page and let's get a conversation going.
            </p>
            <p>
              Or use any of these social contacts
            </p>
            <ul>
              <li>
                Twitter: <a href='https://twitter.com/compileswift' target='_blank' rel='noopener noreferrer'>@CompileSwift</a>
              </li>
              <li>
                LinkedIN: <a href='https://www.linkedin.com/in/peterwitham' target='_blank' rel='noopener noreferrer'>PeterWitham</a>
              </li>
              <li>
                Telegram: <a href='https://t.me/compileswift' target='_blank' rel='noopener noreferrer'>CompileSwift</a>
              </li>
              <li>
                GitHub: <a href='https://www.github.com/grfxguru/' target='_blank' rel='noopener noreferrer'>GrfxGuru</a>
              </li>
            </ul>
            <br/>
            <p>
              Thank You, for your time.
            </p>
            <br/>
            <br/>
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
