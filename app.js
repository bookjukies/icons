const icon_ = document.querySelector(`.round_`);
const play_btn_ = document.querySelector(`.play_`);
const pause_btn_ = document.querySelector(`.pause_`);
const size = 40;
const resize = 36;

pause_btn_.classList.add('none');
//functions`
function change_to_pause() {
  play_btn_.style.width = `${size}%`;
  play_btn_.style.height = `${size}%`;

  pause_btn_.classList.toggle('none');
  play_btn_.classList.toggle(`none`);
}
function press_() {
  play_btn_.style.width = `${resize}%`;
  play_btn_.style.height = `${resize}%`;
  setTimeout(change_to_pause, 200);
}

// event listeners
icon_.addEventListener(`click`, press_);
