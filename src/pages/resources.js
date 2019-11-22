import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'

class ResourceIndex extends React.Component {
  render () {
    const siteTitle = "CompileSwift"
    const maxWidth = rhythm(27)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title='Swift Resources' keywords={['swift', 'swiftui', 'resources', 'tools', 'reference']} />
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingLeft: rhythm(1), paddingRight: rhythm(1) }}>
          <div style={{ maxWidth: maxWidth }}>
            <h1>Useful Resources</h1>
            <p>
              This page contains a list of resources including tools, podcasts, tutorials, and anything else that helps
              Swift and Apple platform developers get the job done. If you have something that should be on this list,
              head on over to the <a href="/contact/">contact page</a> and tell me about it.</p>
          <h2>Software</h2>
          <h3><a href="https://pw.d.pr/7f31K6">SetApp</a></h3>
          <p>SetApp is a collection of over 100 macOS applications for $10 a month.
          This has changed the way I think about software purchases. You can use any or all
          the applications for just the monthly price of subscription.
          A few example apps I use all the time are</p>
          <ul><li>Ulysses</li><li>Code Runner</li><li>Flawless</li><li>Proxyman</li></ul>
          <h2>Services</h2>
          <h3><a href="https://gitignore.io">GitIgnore.io</a></h3>
          <p>It is important to get repositories set up just right, GitIgnore creates the file
          for you, all you need to do is enter the software you use. For example 'Xcode' and 'Swift',
            then copy the file it generates and add it to your repository.</p>
          <h3><a href="https://pw.d.pr/yxRE7M">Bitrise</a></h3>
          <h2>Podcasts</h2>
          <h3><a href="https://www.swiftcommunitypodcast.org">The Swift Community Podcast</a></h3>
          <h2>Tutorials</h2>
          <h3><a href="https://hackingwithswift.com">Hacking with Swift</a></h3>
          <h3><a href="https://cocoacasts.com">Cocoacasts.com</a></h3>
          <h3><a href="https://raywenderlich.com">RayWenderlich.com</a></h3>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ResourceIndex
