import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Cat} from 'react-kawaii'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <br/><br/>
        <div style={{textAlign: "center"}}>
          <Cat size={320} mood="sad" color="#F57738"/>
          <h1>NOT FOUND</h1><br/>
          <p>Ooops! that doesn&#39;t exist...</p><br/>
          <a href={"/"}>Click here to visit the home page
          </a>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
