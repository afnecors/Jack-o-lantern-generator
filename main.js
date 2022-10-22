const MAX_EYE = 5;
const MAX_NOSE = 4;
const MAX_MOUTH = 3;
const MAX_PUMPKIN = 3;

const IMAGES_PATH = './images';
const EYE_PATH = IMAGES_PATH + '/eye';
const NOSE_PATH = IMAGES_PATH + '/nose';
const MOUTH_PATH = IMAGES_PATH + '/mouth';
const PUMPKIN_PATH = IMAGES_PATH + '/pumpkin';

function play() {
  let eyeRandom = randomIntWithZeroPadding(MAX_EYE);
  changeEye('right', eyeRandom);
  changeEye('left', eyeRandom);
  changeNose(randomIntWithZeroPadding(MAX_NOSE));
  changeMouth(randomIntWithZeroPadding(MAX_MOUTH));
  changePumpkin(randomIntWithZeroPadding(MAX_PUMPKIN));
}

function randomIntWithZeroPadding(max) {
  let number = Math.floor(Math.random() * max);
  return number > 10 ?
    "" + number.toString() :
    "0" + number.toString();
}

function changeEye(direction, n) {
  let query = direction === 'left' ?
    '#eye_left_img' :
    '#eye_right_img';
  document.querySelector(query).src = EYE_PATH + "/e" + n + ".png";
}

function changeNose(n) {
  document.querySelector('#nose_img').src = NOSE_PATH + "/n" + n + ".png";
}

function changeMouth(n) {
  document.querySelector('#mouth_img').src = MOUTH_PATH + "/m" + n + ".png";
}

function changePumpkin(n) {
  document.querySelector('#pumpkin_img').src = PUMPKIN_PATH + "/p" + n + ".png";
}
