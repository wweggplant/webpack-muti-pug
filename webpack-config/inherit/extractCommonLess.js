var ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCommonLESS = new ExtractTextPlugin({
    filename:'static/css/common.[contenthash].css',
    allChunks:true,
});

module.exports = extractCommonLESS;