var debug = process.env.NODE_ENV !== "production";

module.exports = {
	context: __dirname +  "/build",
	devtool: debug ? "inline-sourcemap" : null,
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
	}
};


//"react-addons-test-utils": "^15.5.1",