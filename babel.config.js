// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//    ["@babel/plugin-transform-runtime", { "loose": true }],
//     [
//       'module-resolver',
//       {
//         root: ['./'],
//         extensions: ['.js', '.jsx', '.ts', '.tsx'],
//         alias: {
//           '@components': './src/components',
//           '@redux': './src/redux',
//           '@navigation': './src/navigation',
//           '@screens': './src/screens',
//           '@typings': './src/typings',
//           '@utils': './src/utils',
//         },
//       },
//     ],
//   ],
// };


module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['@babel/plugin-transform-private-methods',{ "loose": true }],
      [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
          '@components': './src/components',
          '@redux': './src/redux',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@typings': './src/typings',
          '@utils': './src/utils',
        },
      },
    ],
    ],
  };
};
