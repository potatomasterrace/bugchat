const simple = require('./handlers/simple');
const configured = require('./handlers/configured');
const app_context = require('./handlers/app_context');
const bot_read_endpoint = require('./handlers/bot_read_endpoint');
const bot_endpoint = require('./handlers/bot_endpoint');

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple);
  app.get('/configured', configured(opts));
  app.get('/app_context/:minimum_version', app_context);
  app.get('/conversation/:idx', bot_read_endpoint);
  app.post('/conversation/:idx', bot_endpoint);
};
