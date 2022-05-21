const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`what do you want to hide? paste it below \n`, inputText => {
   let res =hideit(inputText);
   console.log(`copy the text below and save it anywhere else->\n`,res);
   readline.close();
  });
function hideit(inputText){

    let text = inputText.toLowerCase().split('');
    for(let i in text){
      switch(text[i]) {
            case 'a':
            text[i] = 'dolfu'
            break;
            case 'b':
            text[i] = 'selun'
            break;
            case 'c':
            text[i] = 'latir'
            break;
            case 'd':
            text[i] = 'ameno'
            break;
            case 'e':
            text[i] = 'horro'
            break;
            case 'f':
            text[i] = 'gta 5'
            break;
            case 'g':
            text[i] = 'weebs'
            break;
            case 'h':
            text[i] = 'zones'
            break;
            case 'i':
            text[i] = 'waifu'
            break;
            case 'j':
            text[i] = 'vodro'
            break;
            case 'k':
            text[i] = 'vondo'
            break;
            case 'l':
            text[i] = 'noori'
            break;
            case 'm':
            text[i] = 'gamer'
            break;
            case 'n':
            text[i] = 'anime'
            break;
            case 'o':
            text[i] = 'sound'
            break;
            case 'p':
            text[i] = 'boxes'
            break;
            case 'q':
            text[i] = 'donky'
            break;
            case 'r':
            text[i] = 'homie'
            break;
            case 's':
            text[i] = 'dinku'
            break;
            case 't':
            text[i] = 'zyflo'
            break;
            case 'u':
            text[i] = 'romio'
            break;
            case 'v':
            text[i] = 'falud'
            break;
            case 'w':
            text[i] = 'fexo5'
            break;
            case 'x':
            text[i] = 'seclo'
            break;
            case 'y':
            text[i] = 'param'
            break;
            case 'z':
            text[i] = 'miner'
            break;
            case '-':
            text[i] = 'hater'
            break;
            case '_':
            text[i] = 'lover'
            break;
            case '/':
            text[i] = 'color'
            break;
            case '+':
            text[i] = 'space'
            break;
            case '-':
            text[i] = 'jump6'
            break;
            case '^':
            text[i] = 'sunset'
            break;
            case '%':
            text[i] = 'notch'
            break;
            case '$':
            text[i] = 'pulse'
            break;
            case '@':
            text[i] = 'choco'
            break;
            case '!':
            text[i] = 'frends'
            break;
            case '#':
            text[i] = 'froze'
            break;
            case '&':
            text[i] = 'afsos'
            break;
            case '=':
            text[i] = 'mango'
            break;
            case '(':
            text[i] = 'yello'
            break;
            case ')':
            text[i] = 'apple'
            break;
            case '{':
            text[i] = 'shams'
            break;
            case '}':
            text[i] = 'volko'
            break;
            case '[':
            text[i] = 'pablo'
            break;
            case ']':
            text[i] = 'belug'
            break;
            case ':':
            text[i] = 'drive'
            break;
            case ';':
            text[i] = 'swimm'
            break;
            case '?':
            text[i] = 'falls'
            break;
            case '<':
            text[i] = 'lands'
            break;
            case '>':
            text[i] = 'socks'
            break;
            case ',':
            text[i] = 'deads'
            break;
            case '.':
            text[i] = 'works'
            break;
            case `"`:
            text[i] = 'acids'
            break;
            case `'`:
            text[i] = 'natur'
            break;
            case ` `:
            text[i] = 'butal'
            break;
            case `*`:
            text[i] = 'salam'
            break;
            case '`':
                text[i] = 'vulam'
            break;

                        case '|':
                text[i] = 'flowr'
            break;
          }
          
    }
    
    
    let version = '1.1'
    let result = version + '|' + text.join('|')
return result;
}