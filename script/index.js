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
    paragraph : "oi to com saudades!",
    tittle: "leticia"
  },
  {
    id : 1,
    paragraph : "eu gosto muito de você!",
    tittle: "santos"
  },
  {
    id: 2,
    paragraph: `tava fazendo isso aqui ${`</br>`} 
    (seja oque for) e lembrei de você!`,
    tittle: "ostrufka"
  },
  {
    id: 3,
    paragraph: "maior besteira né?",
    tittle: "acertei"
  },
  {
    id: 4,
    paragraph: `mas todas as vezes que eu te vejo 
    ${`</br>`}  é como se fosse a primeira!`,
    tittle: "a ordem"
  },
  {
    id: 5,
    paragraph: `e todos os beijos que eu te dou ${`</br>`}
    é como se fossem unicos!`,
    tittle: "agora?"
  },
  {
    id: 6,
    paragraph: "tchau, pipoca!",
    tittle: "beijos!"
  }
];

let currentPhrase = 0;

back.addEventListener('click', previousPhrase);
next.addEventListener('click', nextPhrase);

displayPhrase(currentPhrase);
