const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Optimizaciones para producción
      if (env === 'production') {
        // Optimizar Terser
        webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.map(minimizer => {
          if (minimizer instanceof TerserPlugin) {
            return new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true,
                  drop_debugger: true,
                },
                mangle: true,
              },
              extractComments: false,
            });
          }
          return minimizer;
        });

        // Añadir CSS minimizer
        webpackConfig.optimization.minimizer.push(
          new CssMinimizerPlugin({
            minimizerOptions: {
              preset: [
                'default',
                {
                  discardComments: { removeAll: true },
                  normalizeWhitespace: true,
                },
              ],
            },
          })
        );

        // Optimizar splitChunks
        webpackConfig.optimization.splitChunks = {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              enforce: true,
            },
          },
        };
      }

      return webpackConfig;
    },
    plugins: {
      add: [
        // Bundle analyzer solo en desarrollo
        ...(process.env.ANALYZE === 'true' ? [new BundleAnalyzerPlugin()] : []),
      ],
    },
  },
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['> 1%', 'last 2 versions', 'not dead'],
          },
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
    ],
  },
}; 