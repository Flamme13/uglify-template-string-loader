# uglify-template-string-loader

[![Build Status](https://travis-ci.org/Flamme13/uglify-template-string-loader.svg?branch=master)](https://travis-ci.org/Flamme13/uglify-template-string-loader) [![Coverage Status](https://coveralls.io/repos/github/Flamme13/uglify-template-string-loader/badge.svg?branch=master)](https://coveralls.io/github/Flamme13/uglify-template-string-loader?branch=master)

Removes extra spaces and line breaks in ES Template Strings.

**before:**
```js
const example = () => `
    <div class="test test-class">
        <h1>title h1</h1>
        <p> description </p>
        <div>
            text     text 2
            <span>span text</span>
        </div>
    </div>
`;
```

**after:**
```js
const example = () => `<div class="test test-class"><h1>title h1</h1><p>description</p><div>text text 2<span>span text</span></div></div>`;
```

## Install

```shell
npm install uglify-template-string-loader --save-dev
```

## Use with webpack

Add the loader to the webpack config.

If you are using a **babel-loader**, then the **uglify-template-string-loader** should be connected before it.

## Examples

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'uglify-template-string-loader'
        }]
      }
    ]
  }
};
```

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'uglify-template-string-loader'
        ]
      }
    ]
  }
};
```

## Use without webpack

You can get a string without extra spaces and line breaks

## Examples

```js
// import
import uts from 'uglify-template-string-loader/lib/uglify-template-string';
// or
import { uts } from 'uglify-template-string-loader/lib';

// get template function
let getTemplate = () => `
    <div class="test test-class">
        <h1>title h1</h1>
        <p> description </p>
        <div>
            text     text 2
            <span>span text</span>
        </div>
    </div>
`;

// template string with extra spaces and line breaks
const template = getTemplate();

// template string without extra spaces and line breaks
const result = uts(template);
```
