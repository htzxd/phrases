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
    paragraph : "Oi to com saudades!",
    tittle: "Leticia"
  },
  {
    id : 1,
    paragraph : "Eu gosto muito de você!",
    tittle: "santos"
  },
  {
    id: 2,
    paragraph: `Tava fazendo isso aqui </br>
    (seja oque for) e lembrei de você!`,
    tittle: "Ostrufka"
  },
  {
    id: 3,
    paragraph: "Maior besteira né?",
    tittle: "acertei"
  },
  {
    id: 4,
    paragraph: `Mas todas as vezes que eu te vejo 
    </br>  é como se fosse a primeira!`,
    tittle: "A ordem"
  },
  {
    id: 5,
    paragraph: `E todos os beijos que eu te dou </br>
    é como se fossem unicos!`,
    tittle: "Agora?"
  },
  {
    id: 6,
    paragraph: "Tchau, pipoca!",
    tittle: "Beijos!"
  }
];

let currentPhrase = 0;

back.addEventListener('click', previousPhrase);
next.addEventListener('click', nextPhrase);

displayPhrase(currentPhrase);
