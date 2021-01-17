function shuffle() {
  var currentIndex = data.length;
  var temporaryValue;
  var randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = data[currentIndex];
    data[currentIndex] = data[randomIndex];
    data[randomIndex] = temporaryValue;
  }
}

function check() {
  if (counter === 2) {
    if (valueFirst === valueLast && idFirst !== idLast) {
      document.getElementById(idFirst).style.visibility = "hidden";
      document.getElementById(idLast).style.visibility = "hidden";
      score++;
    } else {
      document
        .getElementById(idFirst)
        .setAttribute("src", "./images/blank.png");
      document.getElementById(idLast).setAttribute("src", "./images/blank.png");
    }
  }
  if (score === 6) {
    setTimeout(() => {
      location.reload();
      alert("You Win!");
    }, 500);
  }
}

// var data = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
var data = [6, 1, 4, 2, 3, 3, 4, 2, 5, 5, 1, 6];
shuffle(data);
var counter = 0;
var idFirst = -1;
var idLast = -1;
var valueFirst = 9999;
var valueLast = -9999;
var score = 0;

const elements = document.getElementsByClassName("card");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", (e) => {
    counter++;
    if (counter > 2) {
      counter = 1;
    }
    let id = e.target.id;
    let num = parseInt(id.substring(1));
    let imgSrc = "./images/" + data[num] + ".png";
    document.getElementById(id).setAttribute("src", imgSrc);

    if (counter === 1) {
      valueFirst = data[num];
      idFirst = id;
    }

    if (counter === 2) {
      valueLast = data[num];
      idLast = id;
    }

    setTimeout(check, 300);
  });
}
