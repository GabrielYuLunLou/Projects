const message = document.getElementById(msg);

// Step 1 - Generate random number
const randomNum = Math.floor(Math.random() * 100) + 1
console.log(randomNum);


function checkNumber(msg) {

  if (Number.isNaN(msg)) {
    alert('!')
    message.innerHTML = "That is not a valid number"
    return
  }

  if (num > 100 || num < 1) {
    message.innerHTML = "Number must be between 1 and 100"
  }

  if (num === randomNum) {
    message.innerHTML = 'Bingo!'
  } else if (num < randomNum) {
    message.innerHTML = 'Go higher!'
  } else {
    message.innerHTML = 'Go lower'
  }

}
// Step 2 - Start recognition 
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();

// Step 3 - Speak result
recognition.addEventListener('result', (e) => {
  let result = e.results[0][0].transcript;
  message.innerHTML = result;
})

// Step 4 - End SR service
recognition.addEventListener('end', () => recognition.start());

