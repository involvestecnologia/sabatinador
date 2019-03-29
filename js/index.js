var list = [
'<h1>Livro ou ebook?</h1><small>Read on a Kindle or paperback book?</small>',
'<h1>Caminhada ou Bicicleta?</h1><small>Hike or bike?</small>',
'<h1>Férias na América Latina ou na Europa?</h1><small>Vacation in Latin America or Europe?</small>',
'<h1>Escalada ou Tirolesa?</h1><small>Go climbing or zip lining?</small>',
'<h1>Ganhar na loteria ou encontrar o trabalho perfeito?</h1><small>Win the lottery or find your perfect job?</small>',
'<h1>Nadar em uma piscina ou no oceano?</h1><small>Swim in a pool or the ocean? </small>',
'<h1>Assistir ou praticar esportes?</h1><small>Watch sports or play sports?</small>',
'<h1>Quem você levaria em uma ilha deserta?</h1><small>Who would you take to a desert island?</small>',
'<h1>Se dinheiro não fosse o objetivo, o que você faria?</h1><small>If money was no object, what would you do all day?</small>',
'<h1>Aonde mais quer viajar, mas nunca foi?</h1><small>Where do you most want to travel, but have never been?</small>',
'<h1>Qual sua memória favorita?</h1><small>What is your favorite memory?</small>',
'<h1>Tem um livro favorito?</h1><small>What is your favorite book?</small>',
'<h1>Até agora, qual foi seu maior desafio?</h1><small>What has been your biggest challenge?</small>',
'<h1>O que faz o seu dia perfeito?</h1><small>What does your perfect day look like?</small>',
'<h1>Se fosse criar uma obra de arte, sobre o que seria?</h1><small>If you were to create a piece of art, what would the subject be?</small>',
'<h1>O que mudaria se tivesse que fazer tudo de novo?</h1><small>What one thing would you change if you had to do it over?</small>',
'<h1>Se pudesse voltar no tempo, em que ano voltaria?</h1><small>If you could go back in time, what year would you travel to?</small>',
'<h1>O que sua vida diz sobre você?</h1><small>What does your life say about you?</small>',
'<h1>Como seus amigos o descrevem?</h1><small>How would your friends describe you?</small>',
'<h1>Como se sente agora?</h1><small>How do you feel right now?</small>',
'<h1>O que aprendeu hoje?</h1><small>What have you learned today?</small>',
'<h1>Qual foi sua primeira impressão sobre mim?</h1><small>What was your very first impression of me when you first saw me?</small>',
'<h1>Como passa seu tempo livre?</h1><small>How do you spend your free time?</small>',
'<h1>O que mais te incomoda nas pessoas?</h1><small>What annoys you the most about people?</small>',
'<h1>Qual foi sua matéria favorita na escola?</h1><small>What was your favorite subject in school?</small>',
'<h1>Qual a coisa mais assustadora que você já fez?</h1><small>What’s one of the scariest things you’ve ever done?</small>',
'<h1>Do que você mais se orgulha de ter realizado?</h1><small>What accomplishment are you most proud of?</small>',
'<h1>O qua a maioria das pessoas não sabe sobre você?</h1><small>What’s something most people don’t know about you?</small>',
'<h1>O que você deseja que todos saibam sobre você?</h1><small>What’s something you wish everyone knew about you?</small>',
'<h1>O que faz para se divertir?</h1><small>What do you do for fun?</small>',
'<h1>Qual tua cor favorita?</h1><small>What’s your favorite color?</small>',
'<h1>Qual sua comida favorita?</h1><small>What’s your favorite food?</small>',
'<h1>Quais são seus filmes favoritos?</h1><small>What are some of your favorite movies?</small>',
'<h1>O que te faz realmente feliz?</h1><small>What are the things that make you really happy?</small>',
'<h1>O que te deixa realmente triste?</h1><small>What are the things that make you really sad?</small>',
'<h1>Quais sãos seus objetivos na vida?</h1><small>What are some of your major goals in life?</small>',
'<h1>Tudo acontece por uma razão, por que acha que nos conhecemos?</h1><small>Everything happens for a reason, why do you think we met?</small>',
'<h1>Como você me vê?</h1><small>How do you see me?</small>',
'<h1>Se fosse abrir uma empresa agora, seria de quê?</h1><small>If you were to start a new business now, would be what?</small>',
'<h1>Qual sua meta profissional de curto médio prazo?</h1><small>What is your career goal short-medium term?</small>',
'<h1>Qual dinossauro você seria?</h1><small>What dinosaur would you be?</small>',
'<h1>Qual solução digital que não vive sem?</h1><small>What is the digital solution that you does not live without?</small>',
'<h1>Qual foi sua maior crise existencial profissional?</h1><small>What was your biggest professional existential crisis?</small>',
'<h1>Quem você seria em Hollywood?</h1><small>Who would you be in Hollywood?</small>',
'<h1>Se tivesse outra profissão, qual seria?</h1><small>If you had another job, what would it be?</small>',
'<h1>Qual é a cor da sua escova de dentes?</h1><small>What is the color of your toothbrush?</small>',
'<h1>Qual seu MEME favorito?</h1><small>What is your favorite MEME?</small>',
'<h1>Qual foi seu primeiro celular ?</h1><small>What was your first mobile phone ?</small>',
'<h1>Qual pergunta você sempre faz em uma entrevista?</h1><small>Which question do you always do in an interview?</small>',
'<h1>Com quem você mais fala ao telefone?</h1><small>Who are you more talk on the phone?</small>',
'<h1>Café, chá ou achocolatado?</h1><small>Coffee, tea or chocolate?</small>',
'<h1>O que ajuda você a dormir melhor?</h1><small>What helps you to sleep better?</small>',
'<h1>Qual foi o último filme que te fez refletir?</h1><small>What was the last movie that made you think?</small>',
'<h1>Por que o Tarzan não tem barba?</h1><small>Why Tarzan do not have a beard?</small>',
 ];

var shuffledArray = [];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

function getNewRandomPhase() {
 if (shuffledArray.length == 0){
   shuffledArray = list.slice();
   shuffle(shuffledArray);
 }
  
  document.getElementById("randomPhase").innerHTML = shuffledArray.shift();
}

// Detects if device is on iOS 
function isIos() {
  var userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}

// Detects if device is in standalone mode
function isInStandaloneMode() {
  return ('standalone' in window.navigator) && (window.navigator.standalone);
}
  
function initPwaPopup() {
  if (isIos() && !isInStandaloneMode()) {
    setTimeout(function() {
      document.getElementsByClassName('ios-popup')[0].style.visibility = 'visible';
      document.getElementsByClassName('ios-popup')[0].style.opacity = '1';
    }, 2000);
  }
}

initPwaPopup();
