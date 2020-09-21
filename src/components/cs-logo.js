import React from 'react';

function CSLogo({ data }) {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
			}}
		>
			<img src={require('../assets/cs-logo-2020.png')} alt="CompileSwift Logo" />
		</div>
	);
}

export default CSLogo;
