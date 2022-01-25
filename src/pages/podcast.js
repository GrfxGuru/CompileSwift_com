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
						<a href="https://compileswift.transistor.fm/subscribe" target={"_blank" }
							 style={{color: "White"}}>
						<div style={{textAlign: 'center',
							fontWeight: 'bold',
							fontSize: 24,
							backgroundColor: "rgb(55,97,124)",
							borderRadius: 15,
							maxWidth: 700,
							minWidth: 300,
							padding: 15,
							marginTop: 30,
						}}>
							Subscribe using your podcast player
						</div>
						</a>
						<div style={{
							display: 'flex',
							flexDirection: 'row',
							flexWrap: 'wrap',
							justifyContent: 'space-between',

						}}>
							<a href="/podcastguest" style={{color: 'white', fontWeight: 'bold',}}>
						<div style={{textAlign: 'center',
							fontWeight: 'bold',
							fontSize: 24,
							backgroundColor: "rgb(108, 183, 237)",
							borderRadius: 15,
							width: 320,
							height: 50,
							marginTop: 30,
						}}>
							<h2 style={{ paddingTop: 10 }}>Appear on the Podcast</h2>
						</div>
							</a>
							<a href="/episodes" style={{color: 'white', fontWeight: 'bold',}}>
						<div style={{textAlign: 'center',
							fontWeight: 'bold',
							fontSize: 24,
							backgroundColor: "rgb(108, 183, 237)",
							borderRadius: 15,
							width: 320,
							height: 50,
							marginTop: 30,
						}}>
						<h2 style={{ paddingTop: 10 }}>Episode list</h2>
						</div>
							</a>
						</div>
						<div style={{ textAlign: 'center', marginTop: 30, }}>
							<a href="https://podcasts.apple.com/us/podcast/compile-swift/id1467065787" target="_blank" style={{ paddingRight: 20 }}>
								<img src="/images/podcast-players/listen-apple.png" width="200" />
							</a>
							<a href="https://open.spotify.com/show/2RGHkl4UtYj0V7lPcRojzK" target="_blank">
								<img src="/images/podcast-players/listen-spotify.png" width="200" />
							</a>
						</div>
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
							<a href="https://compileswift.transistor.fm" target="_blank">
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
