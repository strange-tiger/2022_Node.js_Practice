const url = require('url');
const querystring = require('querystring');

const parsedURL = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedURL.query);
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));