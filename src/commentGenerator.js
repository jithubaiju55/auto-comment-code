function generateComment(functionData) {
    return `// This function '${functionData.name}' takes parameters (${functionData.params.join(', ')}) and performs an operation.\n`;
}

module.exports = generateComment;
