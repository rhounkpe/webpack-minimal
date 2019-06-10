const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.css$/i,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
            /**
             * Loading images
             * The file-loader resolves import/require() on a file into a url and emits the file into the output directory.
             */
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [{
                        loader: 'file-loader',
                        /** 
                         * Specifies a custom filename template for the target file(s) using the query parameter name.
                         * URL: https://webpack.js.org/loaders/file-loader
                         */
                        options: {
                            //outputPath: 'asserts/images',
                            name(file) {
                                if (process.env.NODE_ENV === 'development') {
                                    return '[path][name].[ext]';
                                }
                                return '[name]-[hash].[ext]';
                            }
                        },
                    },
                    /** A loader for webpack which transforms files into base64 URIs. 
                     * url-loader works like file-loader, but can return a DataURL 
                     * if the file is smaller than a byte limit.
                     */
                    /*
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            fallback: 'responsive-loader',
                            quality: 85,
                        },
                    },
                    */
                    /**
                     * A webpack loader for responsive images. 
                     * Creates multiple images from one source image, and returns a srcset.
                     * 
                     * For super-charged performance, responsive-loader also works with sharp. 
                     * It's recommended to use sharp if you have lots of images to transform.
                     * 
                     * URL: https://www.npmjs.com/package/responsive-loader
                     * 
                     * TODO: Need to finish the configuration.
                     */
                    /*
                    {
                        loader: 'responsive-loader',
                        options: {
                            // Enable sharp support
                            adapter: require('responsive-loader/sharp')
                        }
                    },
                    */
                ],
            },
        ],
    },
};