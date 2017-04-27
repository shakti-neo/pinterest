var path = require("path");
module.exports = {
    entry: path.resolve(__dirname, "react/app.jsx"),
    output: {
        path: path.resolve(__dirname, "react"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.jsx?/,
              loader: "babel-loader",
              exclude: /node_modules/,
              include: path.resolve(__dirname, "react")
            }
        ]
    },
    devServer: {
      port: 3001
    }
};