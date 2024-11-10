const fs = require('fs');
const analyzeCode = require('./analyzer');
const generateComment = require('./commentGenerator');

function autoCommentFile(filePath) {
    const code = fs.readFileSync(filePath, 'utf-8');
    const functions = analyzeCode(code);

    let commentedCode = code;

    // Sort functions by their starting positions in descending order
    functions.sort((a, b) => b.start - a.start);

    functions.forEach(func => {
        const comment = generateComment(func) + '\n';  // Add a newline at the end of each comment
        commentedCode = commentedCode.slice(0, func.start) + comment + commentedCode.slice(func.start);
    });

    fs.writeFileSync(filePath.replace('.js', '.commented.js'), commentedCode, 'utf-8');
    console.log(`Auto-commented file created: ${filePath.replace('.js', '.commented.js')}`);
}

module.exports = autoCommentFile;
