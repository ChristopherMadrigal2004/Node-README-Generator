const inquirer = require('inquirer');
const fs = require('fs');


//inquirer to generate questions
inquirer.prompt(
    [
        {
            type : 'input',
            message : "Whats the project title?",
            name : 'title',
            //validate property to check that user provided value
            validate: (value)=>{if(value){return true} else {return 'Enter Value'}},
        },
        {
            type : 'input',
            message : 'how do you install your app?',
            name : 'installation',
            validate: (value)=>{if(value){return true} else {return 'Enter Value'}},

        },

        {
            type : 'input',
            message : 'instructions to follow?',
            name : 'instructions',
            validate: (value)=>{if(value){return true} else {return 'Enter Value'}},

        },

        {
            type : 'input',
            message : 'any credits?',
            name : 'credits',
            validate: (value)=>{if(value){return true} else {return 'Enter Value'}},

        },
        {
            type : 'input',
            message : 'how do you use your app?',
            name : 'usage',
            validate: (value)=>{if(value){return true} else {return 'Enter Value'}},

        },
        {
            type : 'input',
            message : 'What lisence is used?',
            name : 'license',
            choices : ['The MIT Lisence', 'The GPL Lisence', 'The Apache Lisence', 'The GNU Lisence', 'N/A'],
            validate: (value)=>{if(value){return true} else {return 'Enter Value'}},

        },
        {
            type : 'input',
            message : 'GitHub Username:',
            name : 'git',
            validate: (value)=>{if(value){return true} else {return 'Enter Value'}},

        },
        {
            type : 'input',
            message : 'how do you use your app?',
            name : 'usage',
            validate: (value)=>{if(value){return true} else {return 'Enter Value'}},

        },
        {
            type : 'input',
            message : 'E-mail:',
            name : 'email',
            validate: (value)=>{if(value){return true} else {return 'Enter Value'}},

        },
    ]
).then(({
title,
installation,
instructions,
credit,
license,
git,
linkedin,
email,
usage,
contribution,
})=>{
//template to be used
const template = `# ${title}
*[Installation](#intallation)
*[Usage] (#usage)
*[contribution] (#contribution)
*[Credits] (#Credits)
*[License](#License)
#Installation
${installation}
##Usage
${usage}
##contribution
${contribution}
###instructions
${instructions}
##Credits
${credit}
##license
${license}

#Contact
*Github:${git}
*Linkedin:${linkedin}
*E-mail : ${email}`;
//Function to create our README using fs
createNewFile(title,template);
}
);
//creating our createdNewFile function
function createNewFile(fileName,data){
    //fs
    fs.writeFile(`./${fileName.toLowerCase().split('').join('')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your README has been generated');
})
}

//Now install packages

