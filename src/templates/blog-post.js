import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import RecentPosts from "../components/RecentPosts"
import ShortBio from "../components/ShortBio"
import Sidebar from "../components/Sidebar"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { title } = this.props.data.site.siteMetadata
    const maxWidth = rhythm(27)
    return (
      <Layout location={this.props.location} title={title}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
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
          <div style={{ maxWidth: maxWidth }} className="postContent">
            <a href="https://pw.d.pr/yxRE7M">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: 20,
                }}
              >
                <img src="/images/bitrise.png" style={{ paddingRight: 10 }} />
                <h3 style={{ marginTop: 18 }}>
                  Automate Your Builds and Testing with Bitrise
                </h3>
              </div>
            </a>
            <h1
              style={{
                ...scale(6 / 5),
              }}
            >
              {post.frontmatter.title}
            </h1>
            <ShortBio post={post} />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <br />
            <br />
            <hr
              style={{
                marginBottom: rhythm(1),
              }}
            />
            <Sidebar />
            <Bio />
            <br />
          </div>
        </div>
        <br />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: rhythm(1.5),
          }}
          class={"recentPostsSection"}
        >
          <RecentPosts />
          <br />
          <br />
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              maxWidth: maxWidth,
            }}
          ></div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
        author
        disqusShortname
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
