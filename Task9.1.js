'use strict'
function lastVariant () {
    cutExtraSymbols(input.value);
    let div = document.createElement('div');
    div.className = "task91";
    div.innerHTML = `Решение: ${cutExtraSymbols(input.value)}`;
    document.body.append(div);
};

function cutExtraSymbols (stroka) {
  let newStr = Array.from(stroka);
  for (let x=0; x <= (stroka.length-1); x++){
      let massive1 = splitStrOnWords(stroka);
      if ( massive1.includes( stroka[x].toLowerCase()) ) {
          newStr.splice(x, 1, '');
      }
  } return  newStr.join('');
};

function splitStrOnWords(line) { // строка разбивается на слова и по каждому слову ищутся неуникальные символы
    let ready = [];
    let strWords = line.split(' '); 
    for (let j=0; j <= (strWords.length-1); j++) {
      let strSymbols = strWords[j].split(''); 
      for (let i=0; i <= (strSymbols.length-1); i++){ 
        let deleted = strSymbols.slice();
        deleted.splice(i, 1);
        if ( deleted.includes( strSymbols[i].toLowerCase()) ) {
          ready.push( strSymbols[i].toLowerCase() );
        }
      } 
    } return ready;
};
