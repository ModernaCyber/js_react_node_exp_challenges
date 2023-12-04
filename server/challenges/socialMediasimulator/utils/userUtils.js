
const fs = require('fs');

// const filePath = path.join(__dirname, '../data/user.txt');
function readLines(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return data.split('\n').filter(Boolean);
    } catch (error) {
      return [];
    }
  }
function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

function writeFile(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}
function writeLine(filePath, line) {
    fs.writeFileSync(filePath, line + '\n', { flag: 'a', encoding: 'utf8' });
  }
module.exports = { readLines, readFile, writeFile,writeLine };
