const playAudio = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('press');
};

function removePress(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('press');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => {
  key.addEventListener('transitionend', removePress);
});

window.addEventListener('keydown', playAudio);
