module.exports = function (context, options) {
  return {
    name: 'fix-canvas-node-error',
    configureWebpack(config, isServer, utils) {
      return {
        externals: { canvas: 'canvas' },
      };
    },
  };
};
