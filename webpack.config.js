var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: path.join(__dirname, "src"),
	entry: './js/index.js',
	output: {
		path: __dirname + "/src/",
		filename: "bundle.js"
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccuranceOrderPlugin(),
		new webpack.optimize.UglifyJSPlugin({ mangle: false, sourcemap: false }),
	],
	module:{
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015']
				},
				exclude: /node_modules/
			}
		]
	}

};


// module:{
// 		loaders: [
// 			{
// 				test: /\.jsx?$/,
// 				loader: 'babel',
// 				query: {
// 					presets: ['react', 'es2015']
// 				},
// 				exclude: /node_modules/,
// 				include: __dirname
// 			}
// 		]
// 	}


// ,
// 				include: [
// 					path.join(__dirname, 'components'),
// 					'./index.js'
// 				]