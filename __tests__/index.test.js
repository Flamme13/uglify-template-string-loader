const uglifyTemplateStringLoader = require('../');

const source1 = 'const example1 = `\n' +
  '    <div class="test test-class">\n' +
  '        <h1>title h1</h1>\n' +
  '        <p> description </p>\n' +
  '        <div>\n' +
  '            text     text 2\n' +
  '            <span>span text</span>\n' +
  '        </div>\n' +
  '    </div>\n' +
  '`;';
const result1 = 'const example1 = `<div class="test test-class"><h1>title h1</h1><p>description</p><div>text text 2<span>span text</span></div></div>`;';

const source2 = '(function example2() {\n' +
  '    return `\n' +
  '        <div class="test test-class">\n' +
  '            <h1>title h1</h1>\n' +
  '            <p> description </p>\n' +
  '            <div>\n' +
  '                text     text 2\n' +
  '                <span>span text</span>\n' +
  '            </div>\n' +
  '        </div>\n' +
  '    `;\n' +
  '})();';
const result2 = '(function example2() {\n' +
  '    return `<div class="test test-class"><h1>title h1</h1><p>description</p><div>text text 2<span>span text</span></div></div>`;\n' +
  '})();';

const source3 = 'const example3 = () => (\n' +
  '    `\n' +
  '    <div class="test test-class">\n' +
  '        <h1>title h1</h1>\n' +
  '        <p> description </p>\n' +
  '        <div>\n' +
  '            text     text 2\n' +
  '            <span>span text</span>\n' +
  '        </div>\n' +
  '    </div>\n' +
  '    `\n' +
  ');';
const result3 = 'const example3 = () => (\n' +
  '    `<div class="test test-class"><h1>title h1</h1><p>description</p><div>text text 2<span>span text</span></div></div>`\n' +
  ');';

const source4 = 'const example4 = () => (`\n' +
  '    <div class="test test-class">\n' +
  '        <h1>title h1</h1>\n' +
  '        <p> description </p>\n' +
  '        <div>\n' +
  '            text     text 2\n' +
  '            <span>span text</span>\n' +
  '        </div>\n' +
  '    </div>\n' +
  '`);';
const result4 = 'const example4 = () => (`<div class="test test-class"><h1>title h1</h1><p>description</p><div>text text 2<span>span text</span></div></div>`);';

const source5 = 'const example5 = () => `\n' +
  '    <div class="test test-class">\n' +
  '        <h1>title h1</h1>\n' +
  '        <p> description </p>\n' +
  '        <div>\n' +
  '            text     text 2\n' +
  '            <span>span text</span>\n' +
  '        </div>\n' +
  '    </div>\n' +
  '`;';
const result5 = 'const example5 = () => `<div class="test test-class"><h1>title h1</h1><p>description</p><div>text text 2<span>span text</span></div></div>`;';

const source6 = 'const example6 = () => `<div class="test test-class">\n' +
  '                          <h1>title h1</h1>\n' +
  '                          <p> description </p>\n' +
  '                          <div>\n' +
  '                              text     text 2\n' +
  '                              <span>span text</span>\n' +
  '                          </div>\n' +
  '                      </div>`;';
const result6 = 'const example6 = () => `<div class="test test-class"><h1>title h1</h1><p>description</p><div>text text 2<span>span text</span></div></div>`;';

describe('/index.js [uglifyTemplateStringLoader]', () => {
  test('source1', () => {
    expect(uglifyTemplateStringLoader(source1)).toBe(result1);
  });

  test('source2', () => {
    expect(uglifyTemplateStringLoader(source2)).toBe(result2);
  });

  test('source3', () => {
    expect(uglifyTemplateStringLoader(source3)).toBe(result3);
  });

  test('source4', () => {
    expect(uglifyTemplateStringLoader(source4)).toBe(result4);
  });

  test('source5', () => {
    expect(uglifyTemplateStringLoader(source5)).toBe(result5);
  });

  test('source6', () => {
    expect(uglifyTemplateStringLoader(source6)).toBe(result6);
  });
});
