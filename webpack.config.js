var debug = process.env.NODE_ENV !== "production";
var path = require("path");

module.exports = {
	context: __dirname,
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./src/scripts/index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "build")
	},
	resolve: {
		modules: ["src/scripts", "node_modules"]
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader"
			}
		]
	}
};


//"react-addons-test-utils": "^15.5.1",