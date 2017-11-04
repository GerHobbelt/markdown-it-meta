'use strict';
const meta = require('./meta');

function MetaPlugin(md) {
  md.meta = md.meta || {};
  // TODO: correct code below for MarkdownIT v4+
  md.block.ruler.before('code', 'meta', meta(md), { alt: [] });
}

module.exports = MetaPlugin;
