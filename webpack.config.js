module.exports = {
    entry: './example/main.js',
    output: {
        path: __dirname + '/example/',
        filename: 'result.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: __dirname
                }]
            }
        ]
    }
};