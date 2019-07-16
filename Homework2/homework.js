// Рисование треугольника
const stringReplaceAt = (string, index, replacement) => {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length);
}

const drawTriangle = height => {
  const emptyString = ' '.repeat(height * 2);
  
  for(let i = 0; i < height - 1; ++i) {
    let string = emptyString;
    string = stringReplaceAt(string, height - i - 1, '/');
    string = stringReplaceAt(string, height + i, '\\');
    
    console.log(string);
  }

  const base = `/${'_'.repeat((height - 1 )* 2)}\\`;
  console.log(base);
};

drawTriangle(4);

// Рисование ромба
const stringReplaceAt = (string, index, replacement) => {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length);
}

const drawRomb = height => {
  const emptyString = ' '.repeat(height * 2);
  
  for(let i = 0; i < height ; ++i) {
    let string = emptyString;
    string = stringReplaceAt(string, height - i - 1, '/');
    string = stringReplaceAt(string, height + i, '\\');
    
    console.log(string);
  }

  for(let i = height; i > 0 ; --i) {
    let string = emptyString;
    string = stringReplaceAt(string, height - i , '\\');
    string = stringReplaceAt(string, height + i - 1, '/');
    
    console.log(string);
  }

};

drawRomb(4);

// Функция умножения

function multiply(num,toNum){
    var multiplication = 0;
    for(var i = 1; i <= toNum; i++){
      multiplication += num;
    }
  
    return multiplication;
  }
  
  console.log(multiply(2,5)); 