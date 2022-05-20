const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`what do you want?, unhide or hide, type unhide or hide below \n`, inputText => {
    if(inputText.toLowerCase() == 'show' ){
        require("./showit")
    }
    else{
        require("./hideit")
    }
   });
