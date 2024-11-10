# Auto-Comment Code

**Auto-Comment Code** is a Node.js package that automatically analyzes JavaScript code and adds comments above each function based on its name and parameters. This can help improve readability and documentation of code files.

## Features

- Analyzes JavaScript files to detect functions.
- Generates comments describing each function based on its parameters.
- Saves the modified file with comments as a new file.

## Installation

To use this package, you need to install it through npm. If you have published it to npm, run:

```bash
npm install auto-comment-code

If using it locally, use:

npm link auto-comment-code

usage

Import the package in your code and use the autoCommentFile function to automatically comment a JavaScript file.

Example

Create a JavaScript file with functions (e.g., testFile.js):

function add(a, b) {
    return a + b;
}

function greet(name) {
    console.log(`Hello, ${name}!`);
}

Run the package:

const autoCommentFile = require('auto-comment-code');

autoCommentFile('./testFile.js');

This will create a new file, testFile.commented.js, with comments added.
```
