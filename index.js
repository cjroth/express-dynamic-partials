var fs = require('fs');
var path = require('path');

module.exports = function(views, engine) {

  return function(req, res, next) {

    if (!req.query.template) {
      return next('route');
    }

    engine = engine || req.app.get('view engine');
    views = path.resolve(views || req.app.locals.basedir);

    // important for security: only render templates that are in the allowed directory
    var template = path.resolve(path.join(views, req.query.template + '.' + engine));
    if (template.indexOf(views) !== 0) {
      return next('route');
    }

    try {
      if (fs.lstatSync(template).isDirectory()) {
        throw new Error();
      }
    } catch(e) {
      return next('route');
    }

    res.render(template, req.query);

  };

};