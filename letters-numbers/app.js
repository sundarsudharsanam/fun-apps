const words = [
  'apple', 'beyond', 'cattle', 'catch', 'donkey', 'eagle', 'engine',
  'flower', 'giraffe', 'horse', 'hippo', 'eraser', 'pencil', 'book',
  'charger', 'phone', 'mobile', 'laptop', 'mouse', 'keyboard', 'monitor',
  'water', 'pastel', 'draw', 'drawing', 'orange', 'rhino', 'dinosaur',
  'monkey', 'parrot', 'peacock', 'yatch', 'zebra', 'xylophone',
  'drums', 'piano', 'violin', 'stove', 'cylinder', 'vessel', 'circle',
  'fish', 'square', 'rectangle', 'triangle', 'oval', 'switch', 'fan', 'milk',
  'watch', 'clock', 'time', 'red', 'black', 'blue', 'white', 'green', 'yellow',
  'pink', 'violet', 'maroon', 'purple', 'crow', 'pigeon', 'penguin', 'crane', 'flamingo',
  'walrus', 'fox', 'wolf', 'tiger', 'lion', 'elephant', 'camel', 'lemon', 'mango', 'grapes',
  'above', 'below', 'up', 'down', 'front', 'back', 'rear', 'wheel', 'car', 'bicycle',
  'train', 'aeroplane', 'helicopter', 'bus', 'ship', 'boat', 'picture'
];

function getRandomNumber(min, max) {
  const diff = max - min;
  return Math.floor(Math.random() * diff) + min;
}

const spinner = document.getElementById('spinner');
const output = document.getElementById('output');
const btnNext = document.getElementById('btnNext');

btnNext.addEventListener('click', runApp);

function runApp() {
  let outputLetters = '';
  let outputNumbers = '';

  spinner.classList.remove('d-none');

  const word = words[getRandomNumber(0, words.length)];
  // console.log(word);
  // for (const c of word) {
  //   console.log(c);
  // }

  const str = word.toLowerCase();
  const strArray = [...str];
  strArray.forEach((char, idx) => {
    // console.log(idx, char, str.charCodeAt(idx));
    // console.log(str.charCodeAt(idx) - 96);
    outputLetters += `<span>${char.toUpperCase()}</span>`;
    outputNumbers += `<span>${str.charCodeAt(idx) - 96}</span>`;
  });

  output.innerHTML = `
    <div>${outputLetters}</div>
    <div>${outputNumbers}</div>
  `;
  spinner.classList.add('d-none');
}

runApp();
