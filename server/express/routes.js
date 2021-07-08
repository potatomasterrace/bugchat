const simple = require('./handlers/simple');
const configured = require('./handlers/configured');
const app_context = require('./handlers/app_context');

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', simple);
  app.get('/configured', configured(opts));
  app.get('/app_context', app_context);
};
