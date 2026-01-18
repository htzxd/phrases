const back = document.getElementById('back');
const next = document.getElementById('next');
const sets = document.querySelector('.sets');
const tittle = document.querySelector('.tittle');

function displayPhrase(index){
  sets.innerHTML = `<p><strong>${phrases[index].paragraph}</strong></p>`
  tittle.innerHTML = `<p>${phrases[index].tittle} </p>`
};
 
function nextPhrase(e){
  e.preventDefault();
  currentPhrase = (currentPhrase + 1) % phrases.length;
  displayPhrase(currentPhrase);
};

function previousPhrase(e){
  e.preventDefault();
  currentPhrase = (currentPhrase - 1 + phrases.length) % phrases.length;
  displayPhrase(currentPhrase)
};

const phrases = [
  {
    id : 0,
    paragraph : "oi",
    tittle: "leticia"
  },
  {
    id : 1,
    paragraph : `to`,
    tittle: "santos"
  },
  {
    id: 2,
    paragraph: "com",
    tittle: "ostrufka"
  },
  {
    id: 3,
    paragraph: "saudades",
    tittle: "acertei"
  },
  {
    id: 4,
    paragraph: "de",
    tittle: "a ordem"
  },
  {
    id: 5,
    paragraph: "você",
    tittle: "agora?"
  }
];

let currentPhrase = 0;

back.addEventListener('click', previousPhrase);
next.addEventListener('click', nextPhrase);

displayPhrase(currentPhrase);
