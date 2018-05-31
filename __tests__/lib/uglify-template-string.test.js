const uglifyTemplateString = require('../../lib/uglify-template-string');

const testTemplate1 = `
    <div class="test test-class">
        <h1>title h1</h1>
        <p> description </p>
        <div>
            text     text 2
            <span>span text</span>
        </div>
    </div>
`;
const resultString1 = '<div class="test test-class"><h1>title h1</h1><p>description</p><div>text text 2<span>span text</span></div></div>';

const testTemplate2 = `
    <div class="test test-class">
        <h1>title h1</h1>
        <p> description </p>
        <div>
            text     text 2
            <span>span text
`;
const resultString2 = '<div class="test test-class"><h1>title h1</h1><p>description</p><div>text text 2<span>span text';

const testTemplate3 = `
    description </p>
        <div>
            text     text 2
            <span>span text</span>
        </div>
    </div>
`;
const resultString3 = 'description</p><div>text text 2<span>span text</span></div></div>';

describe('/lib/uglify-template-string.js [uts]', () => {
  test('removing spaces and line breaks', () => {
    expect(uglifyTemplateString(testTemplate1)).toBe(resultString1);
    expect(uglifyTemplateString(testTemplate2)).toBe(resultString2);
    expect(uglifyTemplateString(testTemplate3)).toBe(resultString3);
  });

  test('removing spaces and line breaks (start of the template)', () => {
    expect(uglifyTemplateString(testTemplate2)).toBe(resultString2);
  });

  test('removing spaces and line breaks (end of the template)', () => {
    expect(uglifyTemplateString(testTemplate3)).toBe(resultString3);
  });
});
