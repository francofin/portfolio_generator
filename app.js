// Refactored Code
const inquirer = require('inquirer');
// console.log(inquirer);
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });


inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));
  // inquirer receives type, name, messages etc that can be prompted for










//old version using process.argv
// const profileDataArgs = process.argv.slice(2);

// const [name, github] = profileDataArgs;



// fs.writeFile('./home.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });



// const fs = require('fs');
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// // const name = profileDataArgs[0];
// // const github = profileDataArgs[1];
// const [name, github] = profileDataArgs; // this method is similar to above called assignment destructuring
// // const generatePage = () => 'Name: Francois, Github: francofin';
// // const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// // const generatePage = (userName, githubName) => {
// //   return `
// //     Name: ${userName}
// //     GitHub: ${githubName}
// //   `;
// // };

// const generatePage = (name, github) => {
//   return `
//   <!DOCTYPE html> 
//   <html lang="en"> 
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Portfolio Demo</title>
//   </head>

//   <body>
//     <h1>${name}</h1>
//     <h2><a href="https://github.com/${github}">Github</a></h2>
//   </body>
//   </html>
//   `;
// };

// fs.writeFile('index.html', generatePage(name, github), err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

// When an arrow function has one argument, parentheses are optional.
//  However, when there are no arguments—or more than one—parentheses are necessary.
//fs( name of file created, data to be written to the file, error handling function)
// console.log(name, github);
// console.log(generatePage(name, github));
// local modules needs to be exported first and then imported through the file path, the export is an object or dictionary
// interact with file system using const fs = require('fs), using this node creates the index file in our root path
// can then do fs.open, close, readFile,writeFile
//http webserver can create webserver and make request to other urls like fetch
//url module splits address to readable parts we can use
//many other modules to explore and use
// checkout https://nodejs.org/dist/latest-v12.x/docs/api/path.html
//const url = require('url');
// const myURL =
// url.parse('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
//new method
// const myURL = new URL('/foo', 'https://example.org/');
// https://example.org/foo
// modules can be imported whenever needed

// Generates dynamic HTML
// We use template literals to embed Javascript into a string, done using back ticks `
// the return in the fucntion helps process multi line breaks, creates multi line output
// process holds the user command line arguments
// index through the process.argv and store data into variables.
// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);



// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// const personObj = {
//   name: 'Lernantino',
//   age: 99
// };

// personObj.age = 100;
// personObj.occupation = 'Developer';

// const printProfileData = (profileDataArr) => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//       }
//       console.log('================');

//   // Is the same as this...
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem)
//   });
//   profileDataArr.forEach(profileItem => console.log(profileItem));
//   };
  
//   printProfileData(profileDataArgs);
//console.log(process)

// in node.js process is a global object
// argv is a property of process that produces an array of exactly what was typed into the command line upon execution
//so that we can capture the data and use it
// the first 2 items in the array returns node.js and the file executed
// const creates constant values
// with const we can add to arrays and dictionary (objects), we can edit, remove 
// we cannot edit strings and numbers 
// arrow syntax is pretty much equivalent to creating functions
// let is like var except it is block scoped like const, ignores code existing outside the block
// foreach takes in an item of an array and loops and returns thriugh that array
