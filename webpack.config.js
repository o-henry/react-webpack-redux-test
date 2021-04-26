const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const mode = process.env.NODE_ENV;

module.exports = {
	mode,
	entry: path.resolve(__dirname, './src/index.tsx'),
	devtool: process.env.NODE_ENV === 'production' ? 'eval' : 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		inline: true,
		port: 3000,
		hot: true,
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'ts-loader'],
			},
		],
	},
	resolve: {
		alias: { '@': path.resolve(__dirname, 'src') },
		extensions: ['*', '.tsx', '.ts', '.js', '.jsx', '.json'],
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'public/index.html',
			templateParameters: {
				env: process.env.NODE_ENV === 'production' ? '' : '[DEV]',
			},
			minify:
				process.env.NODE_ENV === 'production'
					? {
							collapseWhitespace: true,
							removeComments: true,
					  }
					: false,
		}),
		new ForkTsCheckerWebpackPlugin(),
		new ESLintPlugin({
			extensions: ['.tsx', '.ts', '.js'],
			exclude: 'node_modules',
		}),
	],
};
