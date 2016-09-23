var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var failPlugin = require('webpack-fail-plugin');
var helpers = require('./helpers');

const PRODUCTION = 'production';

const basePlugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.CommonsChunkPlugin('globals'),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    favicon: './src/app/favicon.ico'
  }),
  new ExtractTextPlugin("styles.css"),
  failPlugin
];

const prodPlugins = [
  new webpack.optimize.UglifyJsPlugin({
    compress: { warnings: false }
  })
];

const plugins = basePlugins
  .concat((process.env.NODE_ENV === 'production') ? prodPlugins: []);

module.exports = {
  entry: {
    globals: [
      'zone.js',
      'reflect-metadata'
    ],
    'app': './src/app/main.ts'
  },

  output: {
    path: helpers.root('dist'),
    publicPath: '',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  resolve: {
    extensions: [
      '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.html'
    ]
  },

  module: {

    loaders:  [
      { test: /\.ts$/, exclude: [/\.(spec|e2e)\.ts$/], loader: [ 'awesome-typescript-loader?tsconfig=/src/tsconfig.json', 'awesome-typescript-loader?tsconfig=/src/tsconfig.json!angular2-template-loader' ] },   
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.(ico)$/, loader: 'file' },
      { test: /\.(png|jpe?g|gif)$/, loader: 'file', query: {name: 'assets/[name].[hash].[ext]'} },
      { test: /\.css$/, exclude: helpers.root('src', 'app'), loader: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: "css-loader"
      }) },
      { test: /\.css$/, include: helpers.root('src', 'app'), loader: 'raw' },
      { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url', query: {limit: '10000', mimetype: 'application/font-woff'} },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url', query: {limit: '10000', mimetype: 'application/octet-stream'} },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url', query: {limit: '10000', mimetype: 'image/svg+xml'} }
    ]
  },

  plugins: plugins
};