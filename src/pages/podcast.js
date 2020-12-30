import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

class PodcastIndex extends React.Component {
	render() {
		const { data } = this.props;
		const siteTitle = data.site.siteMetadata.title;
		const maxWidth = rhythm(27);

		return (
			<Layout location={this.props.location} title={siteTitle}>
				<SEO title="Podcast" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
				<div
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'center',
						paddingLeft: rhythm(1),
						paddingRight: rhythm(1),
					}}
				>
					<div style={{ maxWidth: maxWidth }}>
						<div style={{ textAlign: 'center', backgroundColor: '#2c4667', borderRadius: 5 }}>
							<h2 style={{ paddingTop: 10 }}>Interested in appearing on the Podcast?</h2>
							<h3 style={{ paddingBottom: 10 }}>
								<a href="/podcastguest">Click here</a>
							</h3>
						</div>
						<br />
						<br />
						<div style={{ textAlign: 'center' }}>
							<iframe src="https://anchor.fm/compileswift/embed" height="124px" width="500px" frameBorder="0" scrolling="no"></iframe>
						</div>
						<div style={{ textAlign: 'center' }}>
							<a href="https://podcasts.apple.com/us/podcast/compile-swift/id1467065787" target="_blank" style={{ paddingRight: 20 }}>
								<img src="/images/podcast-players/listen-apple.png" width="200" />
							</a>
							<a href="https://open.spotify.com/show/2RGHkl4UtYj0V7lPcRojzK" target="_blank">
								<img src="/images/podcast-players/listen-spotify.png" width="200" />
							</a>
						</div>
						<h3 style={{ textAlign: 'center' }}>
							<a href="/episodes">Click here to see the episode list.</a>
						</h3>
						<br />
						<h2>What is the CompileSwift Podcast about?</h2>
						<p>The CompileSwift podcast discusses everything from Swift news and tools to the news and anything else that covers the programming language.</p>
						<p>For example, one episode discussed the beta releases for Apple's platforms while another discussed the SwiftUI framework that was announced at WWDC 2019.</p>
						<h2>Who is it for</h2>
						<p>The wrong answer is everyone :).</p>
						<p>The right answer is anyone that is interested in Swift development. If you are totally new to the language and platforms or an experienced developer, I hope it has something for you. Swift is rapidly growing, and that means there is always something to talk about.</p>
						<p>There will be times that topics around development will be covered. For example, I am a strong believer in constant learning and team knowledge sharing, so you can expect now and again that I will discuss soft skills which are every bit as important as good programming skills.</p>
						<h2>How can I listen to it?</h2>
						<p>You asked the best question!</p>
						<p>
							You can go direct to the{' '}
							<a href="https://pw.d.pr/5TbjRs" target="_blank">
								Podcast episode list here
							</a>
							. From there you can either play it via the Web, or listen and subscribe on your favorite player.
						</p>
					</div>
				</div>
			</Layout>
		);
	}
}

export default PodcastIndex;

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
`;
