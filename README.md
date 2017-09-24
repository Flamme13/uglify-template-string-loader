# uglify-template-string-loader

Removes spaces and line breaks in ES Template Strings.

**before:**
```js
let example = () => `
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
let example = () => `<div class="test test-class"><h1>title h1</h1><p>description</p><div>text text 2<span>span text</span></div></div>`;
```

## Install

```shell
npm install uglify-template-string-loader --save-dev
```

## Usage

Add the loader to the webpack config.

If you are using a **babel-loader**, then the **uglify-template-string-loader** should be connected to it before it.

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
