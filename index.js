//infinity loop
while(true){
    //importing readline module
const readline = require('readline-sync');
 let inputText = readline.question( `what do you want?, unhide/hide, type unhide/hide below \n`);

    if(
        inputText.toLowerCase() == 'hide'
     || inputText.toLowerCase() == 'h'){hide();}
     else if(
         inputText.toLowerCase() == 'unhide'
     || inputText.toLowerCase() == 'u' ){unhide();}
     else if(
         inputText.toLowerCase() == 'quit'
    || inputText.toLowerCase() == 'q' ){process.exit();}

function hide(){
     let inputText = readline.question(`what do you want to hide? paste it below \n`)
    let res = hideit(inputText); console.log(`copy the text below and save it anywhere else->\n`,res, `\n`);}

function unhide(){
    let inputText = readline.question(`what do you want to unhide? paste it below \n`)
        let res =unhideit(inputText);console.log(`here is your text below->\n`,res, `\n`);}

   function hideit(inputText){
    let text = inputText.split("");
    for(let i in text){
      switch(text[i]) {
            case 'a':
            text[i] = 'y9'
            break;
            case 'b':
            text[i] = '#4'
            break;
            case 'c':
            text[i] = '0.'
            break;
            case 'd':
            text[i] = '0*'
            break;
            case 'e':
            text[i] = ')2'
            break;
            case 'f':
            text[i] = '5&'
            break;
            case 'g':
            text[i] = '8x'
            break;
            case 'h':
            text[i] = '^n'
            break;
            case 'i':
            text[i] = 's!'
            break;
            case 'j':
            text[i] = '$v'
            break;
            case 'k':
            text[i] = 'lf'
            break;
            case 'l':
            text[i] = 'g^'
            break;
            case 'm':
            text[i] = 'b8'
            break;
            case 'n':
            text[i] = '*m'
            break;
            case 'o':
            text[i] = '/v'
            break;
            case 'p':
            text[i] = '5)'
            break;
            case 'q':
            text[i] = '6;'
            break;
            case 'r':
            text[i] = 'c.'
            break;
            case 's':
            text[i] = '&.'
            break;
            case 't':
            text[i] = '#.'
            break;
            case 'u':
            text[i] = 'k&'
            break;
            case 'v':
            text[i] = 'a#'
            break;
            case 'w':
            text[i] = '4r'
            break;
            case 'x':
            text[i] = '9x'
            break;
            case 'y':
            text[i] = '6.'
            break;
            case 'z':
            text[i] = '5.'
            break;
            case '-':
            text[i] = 'ew'
            break;
            case '_':
            text[i] = 'q;'
            break;
            case '/':
            text[i] = 'l:'
            break;
            case '+':
            text[i] = 'o4'
            break;
            case '-':
            text[i] = 'j!'
            break;
            case '^':
            text[i] = '!;'
            break;
            case '%':
            text[i] = ':f'
            break;
            case '$':
            text[i] = '?#'
            break;
            case '@':
            text[i] = '!)'
            break;
            case '!':
            text[i] = '<!'
            break;
            case '#':
            text[i] = '>^'
            break;
            case '&':
            text[i] = '9<'
            break;
            case '=':
            text[i] = '/#'
            break;
            case '(':
            text[i] = 'g?'
            break;
            case ')':
            text[i] = '@2'
            break;
            case '{':
            text[i] = ';>'
            break;
            case '}':
            text[i] = '@$'
            break;
            case '[':
            text[i] = '^^'
            break;
            case ']':
            text[i] = '::'
            break;
            case ':':
            text[i] = ';;'
            break;
            case ';':
            text[i] = 'm/'
            break;
            case '?':
            text[i] = '*/'
            break;
            case '<':
            text[i] = '_-'
            break;
            case '>':
            text[i] = '_?'
            break;
            case ',':
            text[i] = '/_'
            break;
            case '.':
            text[i] = '=>'
            break;
            case `"`:
            text[i] = '+?'
            break;
            case `'`:
            text[i] = '=#'
            break;
            case ` `:
            text[i] = '}>'
            break;
            case `*`:
            text[i] = '+.'
            break;
            case '`':
                text[i] = '/+'
            break;
              case '|':
                text[i] = '~)'
            break;
            case "0":
                text[i] = "`'"
            break; 
            case '1':
                text[i] = '!~'
            break; 
            case '2':
                text[i] = 's$'
            break; 
            case '3':
                text[i] = ':`'
            break; 
            case '4':
                text[i] = '}`'
            break; 
            case '5':
                text[i] = '\\'
            break; 
            case '6':
                text[i] = ')('
            break; 
            case '7':
                text[i] = '_`'
            break; 
            case '8':
                text[i] = '~p'
            break; 
            case '9':
                text[i] = '\o'
                break;
                case 'a':
                    text[i] = 'y9b'
                    break;
                    case 'b':
                    text[i] = '#4c'
                    break;
                    case 'c':
                    text[i] = '0.d'
                    break;
                    case 'd':
                    text[i] = '0*e'
                    break;
                    case 'e':
                    text[i] = ')2f'
                    break;
                    case 'f':
                    text[i] = '5&g'
                    break;
                    case 'g':
                    text[i] = '8xh'
                    break;
                    case 'h':
                    text[i] = '^ni'
                    break;
                    case 'i':
                    text[i] = 's!j'
                    break;
                    case 'j':
                    text[i] = '$vk'
                    break;
                    case 'k':
                    text[i] = 'lfl'
                    break;
                    case 'l':
                    text[i] = 'g^m'
                    break;
                    case 'm':
                    text[i] = 'b8n'
                    break;
                    case 'n':
                    text[i] = '*mo'
                    break;
                    case 'o':
                    text[i] = '/vp'
                    break;
                    case 'p':
                    text[i] = '5)q'
                    break;
                    case 'q':
                    text[i] = '6;r'
                    break;
                    case 'r':
                    text[i] = 'c.s'
                    break;
                    case 's':
                    text[i] = '&.t'
                    break;
                    case 't':
                    text[i] = '#.u'
                    break;
                    case 'u':
                    text[i] = 'k&v'
                    break;
                    case 'v':
                    text[i] = 'a#w'
                    break;
                    case 'w':
                    text[i] = '4rx'
                    break;
                    case 'x':
                    text[i] = '9xy'
                    break;
                    case 'y':
                    text[i] = '6.z'
                    break;
                    case 'z':
                    text[i] = '5.a'
                    break;
            
          }
    }

let result = [];let wallchars = ['%', '1', '3', '7', 'h', 't'];
    for(let i = 0; i<text.length;i++){
        result.push(text[i]);result.push(wallchars[Math.floor(Math.random() * (5 - 0 + 1)+0)])}

return ".21" + result.join('');}

function unhideit (inputText){
    let text = inputText.replace(/(\%|1|3|7|h|t)/g, '|').split('|');
    text[0] = '';
    for(let i in text){
      switch(text[i]) {
            case 'y9':
            text[i] = 'a'
            break;
            case '#4':
            text[i] = 'b'
            break;
            case '0.':
            text[i] = 'c'
            break;
            case '0*':
            text[i] = 'd'
            break;
            case ')2':
            text[i] = 'e'
            break;
            case '5&':
            text[i] = 'f'
            break;
            case '8x':
            text[i] = 'g'
            break;
            case '^n':
            text[i] = 'h'
            break;
            case 's!':
            text[i] = 'i'
            break;
            case '$v':
            text[i] = 'j'
            break;
            case 'lf':
            text[i] = 'k'
            break;
            case 'g^':
            text[i] = 'l'
            break;
            case 'b8':
            text[i] = 'm'
            break;
            case '*m':
            text[i] = 'n'
            break;
            case '/v':
            text[i] = 'o'
            break;
            case '5)':
            text[i] = 'p'
            break;
            case '6;':
            text[i] = 'q'
            break;
            case 'c.':
            text[i] = 'r'
            break;
            case '&.':
            text[i] = 's'
            break;
            case '#.':
            text[i] = 't'
            break;
            case 'k&':
            text[i] = 'u'
            break;
            case 'a#':
            text[i] = 'v'
            break;
            case '4r':
            text[i] = 'w'
            break;
            case '9x':
            text[i] = 'x'
            break;
            case '6.':
            text[i] = 'y'
            break;
            case '5.':
            text[i] = 'z'
            break;
            case 'ew':
            text[i] = '-'
            break;
            case 'q;':
            text[i] = '_'
            break;
            case 'l:':
            text[i] = '/'
            break;
            case 'o4':
            text[i] = '+'
            break;
            case ' j!':
            text[i] = '-'
            break;
            case '!;':
            text[i] = '^'
            break;
            case ':f':
            text[i] = '%'
            break;
            case '?#':
            text[i] = '$'
            break;
            case '!)':
            text[i] = '@'
            break;
            case '<!':
            text[i] = '!'
            break;
            case '>^':
            text[i] = '#'
            break;
            case '9<':
            text[i] = '&'
            break;
            case '/#':
            text[i] = '='
            break;
            case 'g?':
            text[i] = '('
            break;
            case '@2':
            text[i] = ')'
            break;
            case ';>':
            text[i] = '{'
            break;
            case '@$':
            text[i] = '}'
            break;
            case '^^':
            text[i] = '['
            break;
            case '::':
            text[i] = ']'
            break;
            case ';;':
            text[i] = ':'
            break;
            case 'm/':
            text[i] = ';'
            break;
            case '*/':
            text[i] = '?'
            break;
            case '_-':
            text[i] = '<'
            break;
            case '_?':
            text[i] = '>'
            break;
            case '/_':
            text[i] = ','
            break;
            case '=>':
            text[i] = '.'
            break;
            case `+?`:
            text[i] = `"`
            break;
            case `=#`:
            text[i] = `'`
            break;
            case `}>`:
            text[i] = ' '
            break;
            case `+.`:
            text[i] = '*'
            break;
            case '/+':
                text[i] = '`'
            break;

            case '~)':
                text[i] = '|'
            break;         
            case "`'":
                text[i] = '0'
            break; 
            case '!~':
                text[i] = '1'
            break; 
            case 's$':
                text[i] = '2'
            break; 
            case ':`':
                text[i] = '3'
            break; 
            case '}`':
                text[i] = '4'
            break; 
            case '\\':
                text[i] = '5'
            break; 
            case ')(':
                text[i] = '6'
            break; 
            case '_`':
                text[i] = '7'
            break; 
            case '~p':
                text[i] = '8'
            break; 
            case '\o':
                text[i] = '9'
                break;
                case 'y9b':
                    text[i] = 'a'
                    break;
                    case '#4c':
                    text[i] = 'b'
                    break;
                    case '0.d':
                    text[i] = 'c'
                    break;
                    case '0*e':
                    text[i] = 'd'
                    break;
                    case ')2f':
                    text[i] = 'e'
                    break;
                    case '5&g':
                    text[i] = 'f'
                    break;
                    case '8xh':
                    text[i] = 'g'
                    break;
                    case '^ni':
                    text[i] = 'h'
                    break;
                    case 's!j':
                    text[i] = 'i'
                    break;
                    case '$vk':
                    text[i] = 'j'
                    break;
                    case 'lfl':
                    text[i] = 'k'
                    break;
                    case 'g^m':
                    text[i] = 'l'
                    break;
                    case 'b8n':
                    text[i] = 'm'
                    break;
                    case '*mo':
                    text[i] = 'n'
                    break;
                    case '/vp':
                    text[i] = 'o'
                    break;
                    case '5)q':
                    text[i] = 'p'
                    break;
                    case '6;r':
                    text[i] = 'q'
                    break;
                    case 'c.s':
                    text[i] = 'r'
                    break;
                    case '&.t':
                    text[i] = 's'
                    break;
                    case '#.u':
                    text[i] = 't'
                    break;
                    case 'k&v':
                    text[i] = 'u'
                    break;
                    case 'a#w':
                    text[i] = 'v'
                    break;
                    case '4rx':
                    text[i] = 'w'
                    break;
                    case '9xy':
                    text[i] = 'x'
                    break;
                    case '6.z':
                    text[i] = 'y'
                    break;
                    case '5.a':
                    text[i] = 'z'
                    break;
          }
    }

    let result = text.join('');
return result;
}}