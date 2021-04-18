module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: 3.6,
        targets: { esmodules: true },
      },
    ],
  ];
  const plugins = [["@babel/plugin-proposal-decorators", { legacy: true }]];

  return {
    presets,
    plugins,
  };
};
