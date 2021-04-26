import React from 'react';
import ReactDOM from 'react-dom';
import Styled from 'styled-components';

const Title = Styled.h1`
  color: green;
`;

ReactDOM.render(
	<React.StrictMode>
		<Title>React with Webpack and etc...</Title>
	</React.StrictMode>,
	document.getElementById('root')
);
