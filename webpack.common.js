const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name][contenthash].js",
        clean: true,
        assetModuleFilename: "[name][ext]",
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, "src"),
                use: ["style-loader", "css-loader", "postcss-loader"],
                exclude: /\.module\.css$/,
            },
            {
                test: /\.module\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: { exportLocalsConvention: "camelCase" },
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif|ico)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html", // path to template html
            favicon: "./src/assets/favicon.ico", // path to favicon
        }),
    ],
};
