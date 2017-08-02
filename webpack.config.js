let isDevelopmentMode = !(require("yargs").argv.p || false);
const webpack = require("webpack")

module.exports = {
	context: __dirname +  "/build",
	devtool: isDevelopmentMode ? "inline-sourcemap" : false,
	entry: "../src/scripts/index.js",
	output: {
		path: __dirname +  "/build",
		filename: "./bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader"
			}
		]
	},
	devServer: {
		publicPath: "/build/",
	},
	plugins: [
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify("production")
			}
		})
	]
};


//"react-addons-test-utils": "^15.5.1",