const uglifyTemplateString = require('./lib/uglify-template-string');

module.exports = source => source.replace(
  /(?:(?:=)|(?:=>)|(?:return))(?:\s*\()?\s*`([\d|\D]*?)`/g,
  (match, $1) => match.replace($1, uglifyTemplateString($1)),
);
