var i = 0;
var txt = ' me by filling out the info below';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

const card = document.querySelectorAll('.card-inner');
card.forEach((card) => {
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped')
    }); 
});


