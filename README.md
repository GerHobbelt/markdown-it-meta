# Markdown-it-meta

[![Build Status](https://img.shields.io/travis/GerHobbelt/markdown-it-meta/master.svg?style=flat)](https://travis-ci.org/GerHobbelt/markdown-it-meta)
[![NPM version](https://img.shields.io/npm/v/@gerhobbelt/markdown-it-meta.svg?style=flat)](https://www.npmjs.org/package/@gerhobbelt/markdown-it-meta)
[![Coverage Status](https://img.shields.io/coveralls/GerHobbelt/markdown-it-meta/master.svg?style=flat)](https://coveralls.io/r/GerHobbelt/markdown-it-meta?branch=master)

Markdown-it plugin to add YAML metadata

## Install

```sh
$ npm install @gerhobbelt/markdown-it-meta --save
```

## Use

```js
const MarkdownIt = require('@gerhobbelt/markdown-it')
const meta = require('@gerhobbelt/markdown-it-meta')

// Make new instance
const md = new MarkdownIt()
// Add markdown-it-meta
md.use(meta)

const renderedDocument =  md.render('<md with YAML>')
return {
  document: renderedDocument,
  meta: md.meta
}
```

## Features

Adds YAML to markdown documents to be used as meta data.

- Make Strings
- Make Arrays
- Make Objects
- All YAML is valid

## Markdown

```
---
title: Welcome to Markdown-it-meta
keywords: markdown-it-meta
runs: 0
score: 0.0
demographics:
 - {name: 'unknown'}
---
## Hello World
```

