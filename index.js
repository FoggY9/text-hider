const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`what do you want?, unhide or hide, type unhide or hide below \n`, inputText => {
    if(inputText.toLowerCase() == 'show' ){
        hide()
    }
    else{
        unhide();
    }
   });
function hide(){
    readline.question(`what do you want to hide? paste it below \n`, inputText => {
        let res =hideit(inputText);
        console.log(`copy the text below and save it anywhere else->\n`,res);
        readline.close();
       });
}
function unhide(){
    readline.question(`what do you want to unhide? paste it below \n`, inputText => {
        let res =showit(inputText);
        console.log(`here is your text below->\n`,res);
        readline.close();
       });
}
var wallchars = ['%', '1', '3', '7', 'h', 't'];

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
            case '~':
                text[i] = 'dalal'
            break;
          }
          
    }
    
    
    let version = '1.1'
    let result = version + '|' + text.join('|')
return result;
}
function showit(inputText){

    let text = inputText.toLowerCase().split('|');
    text[0] = '';
    for(let i in text){
      switch(text[i]) {
            case 'dolfu':
            text[i] = 'a'
            break;
            case 'selun':
            text[i] = 'b'
            break;
            case 'latir':
            text[i] = 'c'
            break;
            case 'ameno':
            text[i] = 'd'
            break;
            case 'horro':
            text[i] = 'e'
            break;
            case 'gta 5':
            text[i] = 'f'
            break;
            case 'weebs':
            text[i] = 'g'
            break;
            case 'zones':
            text[i] = 'h'
            break;
            case 'waifu':
            text[i] = 'i'
            break;
            case 'vodro':
            text[i] = 'j'
            break;
            case 'vondo':
            text[i] = 'k'
            break;
            case 'noori':
            text[i] = 'l'
            break;
            case 'gamer':
            text[i] = 'm'
            break;
            case 'anime':
            text[i] = 'n'
            break;
            case 'sound':
            text[i] = 'o'
            break;
            case 'boxes':
            text[i] = 'p'
            break;
            case 'donky':
            text[i] = 'q'
            break;
            case 'homie':
            text[i] = 'r'
            break;
            case 'dinku':
            text[i] = 's'
            break;
            case 'zyflo':
            text[i] = 't'
            break;
            case 'romio':
            text[i] = 'u'
            break;
            case 'falud':
            text[i] = 'v'
            break;
            case 'fexo5':
            text[i] = 'w'
            break;
            case 'seclo':
            text[i] = 'x'
            break;
            case 'param':
            text[i] = 'y'
            break;
            case 'miner':
            text[i] = 'z'
            break;
            case 'hater':
            text[i] = '-'
            break;
            case 'lover':
            text[i] = '_'
            break;
            case 'color':
            text[i] = '/'
            break;
            case 'space':
            text[i] = '+'
            break;
            case 'jump6':
            text[i] = '-'
            break;
            case 'sunset':
            text[i] = '^'
            break;
            case 'notch':
            text[i] = '%'
            break;
            case 'pulse':
            text[i] = '$'
            break;
            case 'choco':
            text[i] = '@'
            break;
            case 'frends':
            text[i] = '!'
            break;
            case 'froze':
            text[i] = '#'
            break;
            case 'afsos':
            text[i] = '&'
            break;
            case 'mango':
            text[i] = '='
            break;
            case 'yello':
            text[i] = '('
            break;
            case 'apple':
            text[i] = ')'
            break;
            case 'shams':
            text[i] = '{'
            break;
            case 'volko':
            text[i] = '}'
            break;
            case 'pablo':
            text[i] = '['
            break;
            case 'belug':
            text[i] = ']'
            break;
            case 'drive':
            text[i] = ':'
            break;
            case 'swimm':
            text[i] = ';'
            break;
            case 'falls':
            text[i] = '?'
            break;
            case 'lands':
            text[i] = '<'
            break;
            case 'socks':
            text[i] = '>'
            break;
            case 'deads':
            text[i] = ','
            break;
            case 'works':
            text[i] = '.'
            break;
            case `acids`:
            text[i] = `"`
            break;
            case `natur`:
            text[i] = `'`
            break;
            case `butal`:
            text[i] = ' '
            break;
            case `salam`:
            text[i] = '*'
            break;
            case 'vulam':
                text[i] = '`'
            break;
            case 'dalal':
                text[i] = '~'
            break;
          }
          
    }
    
    let result = text.join('')
    return result;
  }