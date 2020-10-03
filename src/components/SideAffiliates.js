import React from 'react';
import Afso from '../assets/aff-sa.png';
import Afdo from '../assets/aff-do.png';

const SideAffiliates = ({ source, alt }) => {
	return (
		<div>
			<a href="https://pw.d.pr/7f31K6">
				<img src={Afso} alt={"SetApp"}/>
			</a>
			<a href="https://pw.d.pr/kOYVpQ">
				<img src={Afdo} alt={"DigitalOcean"}/>
		</a>
	</div>
	)
};

export default SideAffiliates;
