import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import ShortBio from "../components/ShortBio"
import StaticPostCard from "../components/StaticPostCard"
import VideoWatermarkImage from "../assets/icon-video.svg"
import BlogWatermarkImage from "../assets/icon-blog.svg"
import PodcastWatermarkImage from "../assets/icon-podcast.svg"
import { OutboundLink } from "gatsby-plugin-google-analytics"

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
              marginTop: 20,
              flexDirection: "row",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              flexBasis: "80%",
            }}
          >
            <div
              style={{
                width: "100%",
                marginTop: 10,
                flexDirection: "row",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  marginBottom: 20,
                  width: "100%",
                  display: "flex",
                  flexFlow: "row nowrap",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: rhythm(1),
                  paddingRight: rhythm(1),
                }}
              >
                <a href={"https://patreon.com/pwcom"}>
                  <img
                    src={"/images/cs_patreon.png"}
                    style={{ maxWidth: "100%" }}
                  />
                </a>
              </div>
              <form
                method="get"
                id="search"
                action="https://duckduckgo.com/"
                //style={{ paddingLeft: 10 }}
                style={{
                  clear: "both",
                  backgroundColor: "rgb(245, 119, 56)",
                  borderStyle: "none",
                  borderRadius: 10,
                  margin: "20px 10px 20px 10px",
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                  boxShadow: "0px 0px 10px 0 rgba(0,0,0,0.3)",
                  maxWidth: 800,
                  minWidth: 400,
                  minHeight: 100,
                  maxHeight: 100,
                }}
              >
                <input type="hidden" name="sites" value="compileswift.com" />
                <input type="hidden" name="k8" value="#444444" />
                <input type="hidden" name="k9" value="#ee4792" />
                <input type="hidden" name="kt" value="h" />
                <input
                  class="field"
                  type="text"
                  name="q"
                  maxlength="255"
                  placeholder="To search, type and hit Enter…"
                  style={{
                    width: 300,
                    borderRadius: 6,
                    borderStyle: "solid",
                    borderColor: "rgb(245, 119, 56)",
                    paddingLeft: 4,
                    paddingRight: 4,
                  }}
                />
                <input
                  type="submit"
                  value="Search"
                  style={{
                    marginLeft: 10,
                    borderRadius: 6,
                    borderStyle: "solid",
                    backgroundColor: "rgb(245, 119, 56)",
                    borderColor: "rgb(245, 119, 56)",
                    color: "White",
                  }}
                />
              </form>
              <div
                style={{
                  clear: "both",
                  backgroundColor: "rgb(245, 119, 56)",
                  borderStyle: "none",
                  borderRadius: 10,
                  margin: "20px 10px 20px 10px",
                  paddingLeft: 10,
                  paddingRight: 10,
                  boxShadow: "0px 0px 10px 0 rgba(0,0,0,0.3)",
                  maxWidth: 800,
                  minWidth: 380,
                }}
              >
                <h3 style={{ color: "White", fontWeight: "Bold" }}>
                  Play the Podcast
                </h3>
                <iframe
                  src="https://anchor.fm/compileswift/embed"
                  height="102px"
                  width="380px"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              </div>
            </div>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Link
                  style={{
                    boxShadow: `none`,
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                  to={node.fields.slug}
                >
                  <div
                    key={node.fields.slug}
                    style={{
                      maxWidth: 400,
                      minWidth: 400,
                      minHeight: 220,
                      maxHeight: 220,
                      borderStyle: "none",
                      borderRadius: 10,
                      margin: "20px 10px 20px 10px",
                      paddingLeft: 10,
                      paddingRight: 10,
                      boxShadow: "0px 0px 10px 0 rgba(0,0,0,0.3)",
                      backgroundColor: "rgb(44, 70, 103)",
                    }}
                  >
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
                    <ShortBio post={node} hideAvatar hideAuthor />
                  </div>
                </Link>
              )
            })}
            <StaticPostCard
              title="Podcast Episodes"
              summary="Click here to see all the podcast episodes."
              url="/episodes"
              watermarkImage={PodcastWatermarkImage}
            />
            <StaticPostCard
              title="Videos"
              summary="Click here to see a list of available videos."
              url="/videos"
              watermarkImage={VideoWatermarkImage}
            />
            <StaticPostCard
              title="Journal and Blog"
              summary="Click here to see older journal and blog blog entries."
              url="/journal"
              watermarkImage={BlogWatermarkImage}
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
