const presets = [
  "@babel/preset-react",
  [
    "@babel/preset-env",
    {
      targets: {
        node: "current",
      },
    },
  ],
];
const plugins = [
  "@babel/plugin-transform-template-literals",
  "@babel/plugin-transform-arrow-functions",
];

module.exports = { presets, plugins };
