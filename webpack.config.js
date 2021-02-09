require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  filename: path.join(__dirname, '/dist/index.html'),
  inject: true,
  minify: {
    collapseWhitespace: true,
    keepClosingSlash: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeRedundantAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true
  },
  template: path.join(__dirname, '/src/index.html')
});

const FaviconsWebpackPluginConfig = new FaviconsWebpackPlugin({
  logo: './src/favicon/icon.png',
  mode: 'webapp',
  devMode: 'webapp',
  favicons: {
    appName: 'starter-kit',
    appDescription: 'Template for building a React app from scratch',
    developerName: 'Liz Shigetoshi',
    developerURL: null,
    background: '#000',
    theme_color: '#fff',
    icons: {
      coast: false,
      yandex: false
    }
  }
});

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react', '@babel/env']
        },
        test: /\.js$/
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: 'single'
  },
  performance: false,
  plugins: [HTMLWebpackPluginConfig, FaviconsWebpackPluginConfig],
  devServer: {
    compress: true,
    port: 9000
  }
};
