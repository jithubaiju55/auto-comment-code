const autoCommentFile = require('../src/autoCommenter');
const fs = require('fs');

test('auto-comments code and creates a new file', () => {
    const sampleCode = `function add(a, b) { return a + b; }`;
    fs.writeFileSync('testSample.js', sampleCode);

    autoCommentFile('testSample.js');
    const commentedCode = fs.readFileSync('testSample.commented.js', 'utf-8');

    expect(commentedCode).toContain('// This function \'add\' takes parameters (a, b) and performs an operation.');
    
    fs.unlinkSync('testSample.js');
    fs.unlinkSync('testSample.commented.js');
});
