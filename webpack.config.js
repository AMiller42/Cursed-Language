const path = require("path");

//Install webpack with `npm install webpack webpack-cli --save-dev`
//For TS, also use `npm install --save-dev typescript ts-loader`
//Run using `npx webpack --config webpack.config.js`

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    // devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
};
