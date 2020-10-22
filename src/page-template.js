const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };


  module.exports = generatePage;


  // node package manager is an online repo for publishing open source code
  // use https://www.npmjs.com/search?q=command%20line%20prompt to search for npm packages
  // to get to the npm command line utility we type npm init, install, uninstall packages, etc
//   We'll create a package.json file to serve as the manifest for the project. 
//   The information in this file pertains to the metadata of the project and which npm packages are being used—called dependencies. 
//   The package.json file also serves several other purposes that we'll cover later.
// typing npm install will install dependencies cloned from a repo
// git rm -r --cached node_modules this removes tracking of files we would want ignored