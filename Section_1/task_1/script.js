//imports
const fs = require('fs');
const path = require('path');

//declare modules
const directoryName = 'task_automation';
const fileNames = ['file1.txt', 'file2.txt', 'file3.txt'];
const concatenatedFileName = 'concatenated.txt';

//create directory
if (!fs.existsSync(directoryName)) {
    fs.mkdirSync(directoryName);
}

//create three text files in new folder
fileNames.forEach(fileName => {
    const filePath = path.join(directoryName, fileName);
    fs.writeFileSync(filePath, `This is ${fileName}`);
});

//concatenate the files
const concatenatedFilePath = path.join(directoryName, concatenatedFileName);
const concatenatedContent = fileNames.map(fileName => fs.readFileSync(path.join(directoryName, fileName), 'utf-8')).join('\n');
fs.writeFileSync(concatenatedFilePath, concatenatedContent);

// console the output
console.log(`Content of "${concatenatedFileName}":\n${concatenatedContent}`);
