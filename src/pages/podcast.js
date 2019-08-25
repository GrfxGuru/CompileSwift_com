import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

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
            <br/>
            <p>If you are not interested in the details and just want to find a way to listen to it.</p><br/><h3
            style={{ textAlign: "center" }}><a href='https://pw.d.pr/5TbjRs' target='_blank'>Go direct to the Podcast
            episodes list here.</a></h3><br/>
            <h2>What is a Podcast</h2>
            <p>A Podcast is often described as an online radio show, but that is not entirely accurate. Think of a
              Podcast as a show that you get to listen to when it is convenient to you and get notifications when new
              episodes are available.</p>
            <p>You can use software on just about any device from a phone to a PC and via a Web browser if you chose to
              listen to it.</p>
            <p>You can either listen to an episode of your choice or to make things even easier, you can 'subscribe' to
              a Podcast and have it sent to you and always available.</p>
            <h2>What is the CompileSwift Podcast about?</h2>
            <p>The CompileSwift podcast discusses everything from Swift news and tools to the news and anything else
              that covers the programming language.</p>
            <p>For example, one episode discussed the beta releases for Apple's platforms while another discussed the
              SwiftUI framework that was announced at WWDC 2019.</p>
            <h2>Who is it for</h2>
            <p>The wrong answer is everyone :).</p>
            <p>The right answer is anyone that is interested in Swift development. If you are totally new to the
              language and platforms or an experienced developer, I hope it has something for you. Swift is rapidly
              growing, and that means there is always something to talk about.</p>
            <p>There will be times that topics around development will be covered. For example, I am a strong believer
              in constant learning and team knowledge sharing, so you can expect now and again that I will discuss soft
              skills which are every bit as important as good programming skills.</p>
            <h2>How can I listen to it?</h2>
            <p>You asked the best question!</p>
            <p>You can go direct to the <a href='https://pw.d.pr/5TbjRs' target='_blank'>Podcast episode list here</a>.
              From there you can either play it via the Web, or listen and subscribe via your chosen player or platform.
            </p>
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
