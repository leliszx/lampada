const lampada1 = document.getElementById('lampada1');
const lampada2 = document.getElementById('lampada2');


var lampada1L = false;
lampada1.addEventListener('click', () => {
  if (lampada1L) {
    lampada1.src = 'lampada.jpg';
    lampada1L = false;
  } else {
    lampada1.src = 'lampada-on.jpg';
    lampada1L = true;
  }
});

var lampada2L = false;
lampada2.addEventListener('mouseover', () => {
  if (!lampada2L) {
    lampada2.src = 'lampada-on.jpg';
    lampada2L = true;
  }
});

lampada2.addEventListener('mouseout', () => {
  if (lampada2L) {
    lampada2.src = 'lampada.jpg';
    lampada2L = false;
  }
});