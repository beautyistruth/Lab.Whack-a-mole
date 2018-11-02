/* eslint-disable linebreak-style */
let score = 0;

let holes = document.getElementsByClassName('hole');setInterval(setMole, 300);

function setMole () {
  const selectedHoleIndex = Math.round(Math.random() * (holes.length - 1));
  holes[selectedHoleIndex].className += ' mole';
  holes[selectedHoleIndex].innerHTML = '';
}
//their solution == holes[randomIndex].classList.toggle('mole');

document.getElementById('whack-a-mole').addEventListener('click', function(){handleClick(event);});

function handleClick(event) {
  if (event.target.matches('.mole')) {
    event.target.className = 'hole';
    event.target.innerHTML = 'Oww!';
    score++;
    document.getElementById('score').innerHTML = score;
  }
}
