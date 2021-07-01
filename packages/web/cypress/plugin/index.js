/// <reference types="cypress" />

import preprocessor from '@cypress/webpack-preprocessor';

module.exports = (on, config) => {
  const webpack = require('../../webpack.config');
  on('file:preprocessor', preprocessor({ webpack }));
  return config;
};
