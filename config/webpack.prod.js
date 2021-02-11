const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.base.js');
const paths = require('./paths');

module.exports = merge(base, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: '/starter-kit/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false,
              modules: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new FaviconsWebpackPlugin({
      logo: paths.src + '/favicon/icon.png',
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
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...']
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});
