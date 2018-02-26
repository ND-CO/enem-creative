// webpack.config.js
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require('imagemin-mozjpeg');
const path = require('path');

module.exports = {


    entry: {
        site: "./source/javascripts/site.js",
        vendor: [
                "jquery",
                "ScrollMagic",
                "addIndicators",
                "scrollmagicgsap",
                "TweenMax",
                "TimelineMax",
                "ScrollToPlugin",
            ]
    },
    output: {
        filename: "javascripts/[name].js", //Would like to use [name].[chunkhash]
        path: __dirname + '/.tmp/dist',
    },

    
    resolve: {
        alias: {
            "jquery": __dirname + '/node_modules/jquery/dist/jquery.js',
            "ScrollMagic": __dirname + '/node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic',
            "addIndicators": __dirname + '/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators',
            "scrollmagicgsap": __dirname + '/node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap',
            "TweenMax": __dirname + '/node_modules/gsap/src/uncompressed/TweenMax',
            "TimelineMax": __dirname + '/node_modules/gsap/src/uncompressed/TimelineMax',
            "ScrollToPlugin": __dirname + '/node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin',
        }
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "stylesheets/[name].css"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor"
        }),

        new UglifyJSPlugin({
            compress: { warnings: false }
        }),
            // Copy the images folder and optimize all the images
            new CopyWebpackPlugin([{
              from: 'source/images/',
              to: 'images/'
            }]),

            new ImageminPlugin({ 
                optipng: {
                    optimizationLevel: 9
                  },
                plugins: [
                    imageminMozjpeg({
                      quality: 80,
                      progressive: true,
                    })
                  ]
             })
          ]
}