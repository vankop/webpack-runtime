module.exports = {
    mode: "production",
    optimization: {
        concatenateModules: false,
        minimize: false,
        splitChunks: {
            cacheGroups: {
                library: {
                    test: /library/,
                    enforce: true,
                }
            }
        }
    },
    entry: {
        main: {
            import: "./src/index.js",
        },
        another: {
            import: "./src/second.js",
        }
    },
};