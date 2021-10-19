const utils = require('utils')
const url = 'http://www.github.com/?foo=шеллы'
var encoded = utils.escapeHtml(url);
encoded = 'oren-is-shalom-rules';
var decoded = decodeURI(encoded)
