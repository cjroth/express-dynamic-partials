# express-dynamic-partials

[![NPM Version](https://img.shields.io/npm/v/express-dynamic-partials.svg?style=flat)](https://www.npmjs.org/package/express-dynamic-partials)
[![NPM Downloads](https://img.shields.io/npm/dm/express-dynamic-partials.svg?style=flat)](https://www.npmjs.org/package/express-dynamic-partials)
[![Node.js Version](https://img.shields.io/badge/node.js->=_0.8-brightgreen.svg?style=flat)](http://nodejs.org/download/)
[![Build Status](http://img.shields.io/travis/cjroth/express-dynamic-partials.svg?style=flat)](https://travis-ci.org/cjroth/express-dynamic-partials)
[![Coverage Status](https://img.shields.io/coveralls/cjroth/express-dynamic-partials.svg?style=flat)](https://coveralls.io/r/cjroth/express-dynamic-partials)
[![Gittip](http://img.shields.io/gittip/cjroth.svg)](https://www.gittip.com/cjroth/)

#### Dynamically render partials server-side. Works with any view engine, eg ejs, jade, etc.


Add it as middleware:

```js
var app = express();
var partials = require('express-dynamic-partials');
app.locals.basedir = __dirname + '/partials');
app.use('/render', partials(app.locals.basedir, 'jade'));
```

Supports any view engine:

```js
app.use('/render', partials(app.locals.basedir, 'ejs'));
```

If no view engine is specified, it will use the app's view engine:

```js
app.set('view engine', 'ejs');
app.use('/render', partials(app.locals.basedir)); // will use ejs
```

Create a partial:

```
/partials
  /my-partial.jade
```

```
h1= text
```

Dynamically render the partial:

```bash
curl localhost:3000/render/my-partial?text=hello
```

Returns:

```html
<h1>hello</h1>
```

## Installation

```bash
$ npm install express-dynamic-partials
```

```js
var app = express();
var partials = require('express-dynamic-partials');
app.locals.basedir = __dirname + '/partials');
app.use('/render', partials(app.locals.basedir, 'jade'));
```

## [MIT Licensed](LICENSE)