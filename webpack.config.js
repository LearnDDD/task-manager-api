const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'development',
    entry: './src/server.ts',     // src下に書いていくので　src/server.tsにしとく
    target: 'node',               // Module not found: Error: Can't resolve 'fs'とかいっぱい出たら、この行書き忘れ
    externals: [nodeExternals()], 
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts$/,
                exclude: [
                    /node_modules/
                ],
                options: {
                    configFile: 'tsconfig.json'
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist')
    }
};