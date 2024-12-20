module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@screens': './src/screens',
            '@components': './src/components',
            '@assets': './src/assets',
            '@storage': './src/storage',
            '@services': './src/services',
          },
        },
      ],
    ],
  }
}
