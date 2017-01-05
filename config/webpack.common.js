var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    //Splitting application into 3 bundles
    entry: {
        'polyfills': './src/polyfills.ts', //run modern tech in old browsers
        'vendor': './src/vendor.ts', //3rd service
        'app': './src/main.ts' //application code
    },

    //Help webpack know extension file import
    resolve: {
        extensions: ['', '.ts', '.js']
    },

    //Using moduler loader prop with type file which using import or require
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader']
            },
            {
                test: /\.js$/,
                loaders: [
                    'ng-annotate-loader',
                    'babel-loader'
                ],
                exclude: [/node_modules/, /\.(spec|e2e)\.js$/]
            },
            {
                test: /\.html$/,
                loader: 'html?-minimize'
            },
            {
                test: /\.(png|jpe?g|gif|ico|bmp)$/,
                loader: 'file?name=assets/images/[name].[hash].[ext]'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                loader: 'file?name=assets/fonts/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loaders: [ExtractTextPlugin.extract('style', 'css-loader'), 'to-string', 'css']
            },
            {
                //Don't extract scss in each components with global scss avoid duplicate code
                test: /\.scss$/,
                include: helpers.root('src', 'app'),
                loader: 'to-string!css!sass!resolve-url!sass?sourceMap' // loaders to preprocess CSS
            },
            {
                //Global scss extract to file css load when start
                test: /\.scss$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract(
                    'style', // backup loader when not building .css file
                    'css!sass!resolve-url!sass?sourceMap' // loaders to preprocess CSS
                )
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /[\\\/]bower_components[\\\/]modernizr[\\\/]modernizr\.js$/,
                loader: "imports?this=>window!exports?window.Modernizr"
            }
        ]
    },

    plugins: [
        //Plugin optimize code, remove the same code vendor from app
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        //Plugin Inject js css to html
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            //Default sort 'auto', config to 'none' will sort a-z of name chunk
            // chunksSortMode: 'none'
        }),

        //Optimize code by remove white-line, spacing
        new webpack.optimize.UglifyJsPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ]
};
