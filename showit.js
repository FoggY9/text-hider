const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question(`what do you want to unhide? paste it below \n`, inputText => {
  let res =showit(inputText);
  console.log(`here is your text below->\n`,res);
  readline.close();
 });

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
