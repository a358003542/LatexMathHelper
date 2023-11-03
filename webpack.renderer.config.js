const rules = require('./webpack.rules');

const CopyPlugin = require("copy-webpack-plugin");
rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'resources/images', to: 'main_window/static/images' },
        { from: 'resources/mathjax', to: 'main_window/static/mathjax' },
        { from: 'resources/bootstrap', to: 'main_window/static/bootstrap' },
      ],
    }),
  ]
};
