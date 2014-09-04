var fs = require('fs');
var path = require('path');

module.exports = function(views, engine) {

  return function(req, res, next) {

    var template = req.url.split('?')[0];

    engine = engine || req.app.get('view engine');
    views = path.resolve(views || req.app.locals.basedir);

    // important for security: only render templates that are in the allowed directory
    template = path.resolve(path.join(views, template + '.' + engine));

    if (template.indexOf(views) !== 0) {
      return next('route');
    }

    if (!fs.existsSync(template) || !fs.lstatSync(template).isFile()) {
      return next('route');
    }

    res.render(template, req.query);

  };

};