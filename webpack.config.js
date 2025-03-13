const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/ui.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        // clean all files of dist before bundlings
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["src/**/*"],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
            },
            {
                // test: which files to transform
                test: /\.html$/i,
                loader: "html-loader",
            },
            // Then, in whatever JavaScript module we 
            // want to use that image in, we just have to default import it.
            // Ex: import odinImage from "./odin.png";
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};
