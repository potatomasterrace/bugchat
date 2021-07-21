const app_context = require('./handlers/app_context');
const bot_read_endpoint = require('./handlers/bot_read_endpoint');
const bot_endpoint = require('./handlers/bot_endpoint');
const asyncHandler = require('express-async-handler')

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/app_context/:minimum_version', asyncHandler(app_context));
  app.get('/conversation/:minimum_version', asyncHandler(bot_read_endpoint));
  app.post('/conversation/:idx', bot_endpoint);
};
