import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import StaticPostCard from "../components/StaticPostCard"
import VideoWatermarkImage from "../assets/icon-video.svg"
import PodcastWatermarkImage from "../assets/icon-podcast.svg"
import "ui-neumorphism/dist/index.css"

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
          keywords={[
            `blog`,
            `swiftui`,
            `swift`,
            `development`,
            `ios`,
            `macos`,
            `watchos`,
            `podcast`,
            `programming`,
            `software`,
          ]}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexFlow: "row nowrap",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: rhythm(1),
            paddingRight: rhythm(1),
          }}
        >
          <div
            style={{
              width: "100%",
              marginTop: 0,
              flexDirection: "row",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              flexBasis: "80%",
            }}
          >
            <StaticPostCard
              title="Podcast"
              summary="Click here access all Podcast episodes and subscribe/follow."
              url="https://compileswift.transistor.fm"
              watermarkImage={PodcastWatermarkImage}
            />
            <StaticPostCard
              title="Blog Posts"
              summary="Click here to jump to my Swift and Apple development blog posts."
              url="https://peterwitham.com/category/swift/"
              watermarkImage={VideoWatermarkImage}
            />
            <StaticPostCard
              title="Live Stream"
              summary="Click here to discover my Swift and Apple development Live Stream."
              url="https://twitch.tv/compileswift"
              watermarkImage={VideoWatermarkImage}
            />
            <StaticPostCard
              title="Join the Discord"
              summary="Want to discuss development with like minded souls? There's a Discord for that right here."
              url="https://discord.gg/bUTcZE7E"
              watermarkImage={VideoWatermarkImage}
            />
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
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
