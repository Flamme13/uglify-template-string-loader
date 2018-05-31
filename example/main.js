const example1 = `
    <div class="test test-class">
        <h1>title h1</h1>
        <p> description </p>
        <div>
            text     text 2
            <span>span text</span>
        </div>
    </div>
`;

(function example2() {
    return `
        <div class="test test-class">
            <h1>title h1</h1>
            <p> description </p>
            <div>
                text     text 2
                <span>span text</span>
            </div>
        </div>
    `;
})();

const example3 = () => (
    `
    <div class="test test-class">
        <h1>title h1</h1>
        <p> description </p>
        <div>
            text     text 2
            <span>span text</span>
        </div>
    </div>
    `
);

const example4 = () => (`
    <div class="test test-class">
        <h1>title h1</h1>
        <p> description </p>
        <div>
            text     text 2
            <span>span text</span>
        </div>
    </div>
`);

const example5 = () => `
    <div class="test test-class">
        <h1>title h1</h1>
        <p> description </p>
        <div>
            text     text 2
            <span>span text</span>
        </div>
    </div>
`;

const example6 = () => `<div class="test test-class">
                          <h1>title h1</h1>
                          <p> description </p>
                          <div>
                              text     text 2
                              <span>span text</span>
                          </div>
                      </div>`;
