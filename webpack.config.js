/* === dont forget to import scss to main.js file === */
/* ===> import './main.scss'; <=== */

// ExtractTextPlugin moves all the required *.css modules in entry chunks into a separate CSS file. 
// So your styles are no longer inlined into the JS bundle.
// But we have to import css in js file.  Just css in bundled.
// We can use without sass, with just css-loader.

// to autoprefix in webpack use postcss-loader and
// just add 'postcss-loader' in extratplugin use and
// create postcss.config.js, check below!
// https://github.com/postcss/autoprefixer#webpack

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const GoogleFontsPlugin = require('google-fonts-webpack-plugin');
const webpack = require('webpack');

var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    devServer:{
        host:'0.0.0.0',
        port:3000
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: extractPlugin.extract({
                    use: ['css-loader']
                })
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                use: extractPlugin.extract({
                    use: ['url-loader']
                })
            },
            {
                test: /\.js$/,
                include: /src/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["es2015"]
                    }
                }
            }
        ]
    },
    plugins: [
        extractPlugin,
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            sourceMap: true,
            compressor: {
                warnings: false
            }
        })
    ]
};