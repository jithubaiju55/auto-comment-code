const esprima = require('esprima');

function analyzeCode(code) {
    const syntaxTree = esprima.parseScript(code, { comment: true, range: true });
    const functions = [];

    // Traverse syntax tree to find functions
    syntaxTree.body.forEach(node => {
        if (node.type === 'FunctionDeclaration') {
            functions.push({
                name: node.id.name,
                params: node.params.map(param => param.name),
                start: node.range[0],
                end: node.range[1]
            });
        }
    });
    return functions;
}

module.exports = analyzeCode;
