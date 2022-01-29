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
import { Card, CardContent } from "ui-neumorphism"
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
                <div style={{fontWeight: "bold", fontSize: 20,}}>
                  <a href="https://www.patreon.com/bePatron?u=43369030" data-patreon-widget-type="become-patron-button">Become a Patron!</a><script async src="https://c6.patreon.com/becomePatronButton.bundle.js"></script>
                </div>
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
                  minWidth: 800,
                  minHeight: 50,
                  maxHeight: 50,
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
                    width: 690,
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
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    borderBottomRightRadius: 6,
                    borderBottomLeftRadius: 6,
                    borderStyle: "solid",
                    backgroundColor: "rgb(194, 114, 0)",
                    borderColor: "rgb(255, 207, 88)",
                    color: "white",
                    paddingLeft: 5,
                    paddingRight: 5,
                    fontWeight: "bold",
                  }}
                />
              </form>
              <div
                style={{
                  clear: "both",
                  backgroundColor: "#633632",
                  borderStyle: "none",
                  borderRadius: 10,
                  margin: "20px 10px 20px 10px",
                  paddingLeft: 10,
                  paddingRight: 10,
                  boxShadow: "0px 0px 10px 0 rgba(0,0,0,0.3)",
                  maxWidth: 800,
                  minWidth: 800,
                }}
              >
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
                  <Card
                    key={node.fields.slug}
                    rounded width={390} style={{
                      backgroundColor: "rgb(255, 249, 243)",
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderColor: "#f57738",
                      maxHeight: 270,
                      minHeight: 270,
                      margin: 10,
                    }}
                  >
                    <CardContent  style={{backgroundColor: "rgb(255, 249, 243)"}}>
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
                        color: "black",
                        fontWeight: "normal",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                    <br />
                    <ShortBio post={node} hideAvatar hideAuthor />
                    </CardContent>
                  </Card>
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
