const rules = require('./webpack.rules');

const CopyPlugin = require("copy-webpack-plugin");
rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  target: 'electron-renderer',
  
  // 如果加了 target 依然提示，可以补上 node 配置
  node: {
    __dirname: false, // 保持 Node.js 原生的 __dirname 行为，不让 Webpack 篡改
  },

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
  ],
};
