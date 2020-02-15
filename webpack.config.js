const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/interfaces/server.ts',
  target: 'node',
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
    alias: {
      '@/domain': path.resolve(__dirname, 'src/domain'),
      '@/application': path.resolve(__dirname, 'src/application'),
      '@/infrastructure': path.resolve(__dirname, 'src/infrastructure'),
      '@/interfaces': path.resolve(__dirname, 'src/interfaces')
    },
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  }
};
