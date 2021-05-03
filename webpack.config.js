const path = require("path")

const config = {
    entry: {
        content: path.join(__dirname, "src/content/index.js"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            }
        ]
    },
    output: {path: path.join(__dirname, "build"), filename: "[name].js"},
    mode: "development", // "production"
    devtool: "source-map", // see https://webpack.js.org/configuration/devtool
}

module.exports = config
