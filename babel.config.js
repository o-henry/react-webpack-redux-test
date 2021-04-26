const presets = [
	'@babel/preset-react',
	[
		'@babel/preset-env',
		{
			targets: {
				node: 'current',
			},
		},
	],
	'@babel/preset-typescript',
];

const plugins = [
	'@babel/plugin-transform-template-literals',
	'@babel/plugin-transform-arrow-functions',
	'babel-plugin-styled-components',
];

module.exports = { presets, plugins };
