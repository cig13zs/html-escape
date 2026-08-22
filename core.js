;(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.RepoTool = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
var named={amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:'\u00a0'};
function escapeHtml(value){return String(value).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
function decodeHtml(value){return String(value).replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi,function(all,entity){if(entity[0]==='#'){var cp=entity[1].toLowerCase()==='x'?parseInt(entity.slice(2),16):parseInt(entity.slice(1),10);return cp>=0&&cp<=0x10ffff?String.fromCodePoint(cp):all;}return Object.prototype.hasOwnProperty.call(named,entity.toLowerCase())?named[entity.toLowerCase()]:all;});}
async function process(input){var value=String(input||''),decode=value.startsWith('decode:'),output=decode?decodeHtml(value.slice(7)):escapeHtml(value.replace(/^escape:/,''));return{output:output,summary:decode?'Entities decoded':'Markup escaped'};}
  return { process: process, escapeHtml: escapeHtml, decodeHtml: decodeHtml };
});
