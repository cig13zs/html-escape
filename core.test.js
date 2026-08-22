const assert = require('assert');
const Tool = require('./core');

(async function () {
  assert.strictEqual(Tool.escapeHtml('<b>&</b>'), '&lt;b&gt;&amp;&lt;/b&gt;');
  assert.strictEqual(Tool.decodeHtml('&lt;b&gt;&#x1F600;'), '<b>😀');
  assert.strictEqual(Tool.decodeHtml('&unknown;'), '&unknown;');
  console.log('ok, tool assertions passed');
})().catch(function (error) {
  console.error(error);
  process.exitCode = 1;
});
