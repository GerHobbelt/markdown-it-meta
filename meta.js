'use strict';

const YAML = require('@gerhobbelt/js-yaml');

function get(state, line) {
  const pos = state.bMarks[line];
  const max = state.eMarks[line];
  return state.src.substr(pos, max - pos);
}

function meta(md, state, start, end) {
  if (start !== 0 || state.blkIndent !== 0) {
    return false;
  }
  if (state.tShift[start] < 0) {
    return false;
  }
  if (!get(state, start).match(/^---$/)) {
    return false;
  }
  const data = [];
  let line = start;
  while (line < end) {
    line++;
    const str = get(state, line);
    if (str.match(/^---$/)) {
      break;
    }
    if (state.tShift[line] < 0) {
      break;
    }
    data.push(str);
  }

  // if (line >= end) {
  //   return false;
  // }

  md.meta = YAML.safeLoad(data.join('\n'), { json: true }) || {};
  state.line = line + 1;
  return true;
}

module.exports = meta;

