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
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"],
            }
        ]
    },
    output: {path: path.join(__dirname, "build"), filename: "[name].js"},
    mode: "development",
    // mode: "production",
    devtool: "source-map", // see https://webpack.js.org/configuration/devtool
}

module.exports = config
