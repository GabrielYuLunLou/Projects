const words = ['happy', 'ball', 'warlike', 'dependent', 'silver', 'superficial', 'telecommunication', 'juice'];
let score = 0;
let time = 10;
let randomWord;

function generateRandomWord() {
  let randomNumber = Math.floor(Math.random() * words.length); 
  randomWord = words[randomNumber];
  $('#word').html(randomWord);
}

generateRandomWord()

setInterval(() => {
    time = time - 1;
    $('#time').html(time);
    if (time === 0) {
        alert('Game Over')
    }
}, 1000);

$('#text').on('input', (e) => {
  if (randomWord === e.target.value) {
    generateRandomWord()
    e.target.value = '';
    score = score + 1
    $('#score').html(score);
    time = time + 5
    $('#time').html(time);
  }
})