// require('!!file-loader?name=index.html!../../index.html');
module.exports = {
  js: {
    jquery: require('!!file-loader?name=static/js/[name].[ext]!jquery/dist/jquery.min.js'),
    weui: require('!!file-loader?name=static/js/[name].[ext]!../../../vendor/weui/weui.min.js'),
  },
  css: {
    base: require('!file-loader?name=static/css/base.[hash].css!extract-loader?publicPath="static/css/"!css-loader?minimize=true!less-loader!../less/base.less'),
  },
  images: {
    loadImage(path) {
      return require(`!!file-loader?name=static/images/[name].[hash].[ext]!../imgs/${path}`);
    },
  },
  dll: {
    js: require('!!file-loader?name=dll/dll.js!../../dll/dll.js'),
    css: require('!file-loader?name=dll/dll.css!../../dll/dll.css'),
  },
};
