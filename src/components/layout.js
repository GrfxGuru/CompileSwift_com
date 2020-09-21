import React from 'react';
import { Link } from 'gatsby';
import Headroom from 'react-headroom';
import { scale } from '../utils/typography';
import CSLogo from './cs-logo';

import Menu from './Menu';
import SocialLinks from '../components/SocialLinks';

import '../assets/darkmode.css';

class Layout extends React.Component {
	render() {
		const { title, children } = this.props;
		let header;

		header = (
			<div
				style={{
					backgroundColor: '#f57738',
					paddingTop: 40,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					height: 230,
				}}
			>
				<Link
					style={{
						boxShadow: `none`,
						textDecoration: `none`,
						color: `white`,
						display: 'flex',
						justifyContent: 'center',
					}}
					to={`/`}
				>
					<CSLogo />
				</Link>
				<br />
				<SocialLinks />
				<Menu />
			</div>
		);

		return (
			<div
				style={{
					marginLeft: `auto`,
					marginRight: `auto`,
				}}
			>
				<Headroom>
					<header>{header}</header>
				</Headroom>

				<main>{children}</main>
				{/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
			</div>
		);
	}
}

export default Layout;
