var mainCounter = 0;
var scoreCounter = 0;
var scoreCounter2 = 0;
var i = 0;
var heartScoreCounter = 0;
var starScoreCounter = 0;
var MidnightScoreCounter = 0;
var BeachScoreCounter = 0;
var WaveScoreCounter = 0;
var PopScoreCounter = 0;

let bellSound = new Audio('405994-JSB-Desk_Bell_Small.wav');
let waveSound = new Audio('346896-Small_Wave_In_Bathtub_01.wav');
let popSound = new Audio('76178-Small_pill_bottle_cap_pop_off_plastic-BLASTWAVEFX-12530.wav');

const quotes = [
  "Believe you can and you're halfway there.", "Act as if it were impossible to fail.", "Keep going, you're getting there.", "You can do it, believe in yourself.", "Stay positive, work hard, make it happen.", "Dream big, work hard, stay focused.", "Don't stop until you're proud.", "Believe in the power of yet.",
  "Stay strong, make them wonder why.", "Turn your dreams into plans.", "You are stronger than you think.", "Create your own sunshine.", "Be a warrior, not a worrier.", "Stay humble, work hard, be kind.",  "Make today ridiculously amazing.", "Your only limit is you.",
  "Do it with passion or not at all.", "Stay positive, be happy.", "Don't wait for opportunity, create it.", "Make every day count.", "Focus on the good.", "Embrace the journey.", "Live the life you imagined.", "Be the energy you want to attract.",
  "Every moment matters.",  "Be the best version of you.", "Believe in your infinite potential.", "Small steps lead to big changes.", "Rise above the storm.", "Focus on your goals.", "Success is the best revenge.", "Stay determined, stay focused.", "Choose happiness, always.",  "Your future is created by today.",
  "Don't quit your daydream.", "Believe in your dreams.", "You are capable of amazing things.", "Never give up, great things take time.", "Chase your passion.", "Your vibe attracts your tribe.", "Think less, do more.", "Take the risk or lose the chance.",
  "Keep going, you are getting there.", "Positive mind, positive life.", "Believe in your abilities.", "Every day is a fresh start.", "Make today count.", "Stay positive, be happy.","Dream big, achieve bigger.", "You got this!", "Believe in yourself.", "Stay focused, stay positive.",
  "Be fearless in pursuit.", "Create your own sunshine.", "Push yourself, no one else will.", "Success is no accident.", "You are your only limit.", "Good vibes only.", "Be your own hero.", "Keep pushing forward.",
  "Follow your dreams.",  "Never stop dreaming.", "Stay true to yourself.", "Create your own destiny.", "Never stop believing.",  "Focus on the present.",  "Live with intention.",  "Believe and achieve.",  "Stay humble, hustle hard.",  "Live with purpose.",
  "Dream it, do it.",  "Stay positive, work hard.",  "Every day is a gift.",  "Believe in miracles.",  "The best is yet to come.",  "Do something great today.",  "You are enough.",  "Dare to dream big.",  "You matter.",  "Seize the day.",
  "Live your best life.",  "Never lose hope.",  "Stay strong, stay positive.",  "Think positive, be positive.",  "Keep dreaming.",  "Do what you love.",  "Follow your heart.",  "Believe in possibilities.",  "Never stop exploring.",  "Dream without fear.",
  "Focus on the good.",  "Keep moving forward.",  "Live life fully.",  "Stay hungry, stay foolish.",  "Success starts within.",  "Happiness is a choice.",  "You can and you will.",  "Create your own path.",
 "Stay motivated.",  "Live for today.",  "Chase your dreams.",  "Every moment counts.",  "Be unstoppable.",  "Find your passion.",  "Work hard, dream big.",  "Keep believing.",  "Do your best.",  "Enjoy the journey.",  "The sky's the limit.",
  "Make it happen.",  "Shine your light.",  "You are amazing.",  "Dream, believe, achieve.",  "Stay positive, stay focused.","Be the change.",  "Your time is now.",  "Dare to be different.",  "Live with passion.",
  "Stay inspired.",  "You are unstoppable.",  "Keep climbing.",  "Think big, act bigger.",  "Be the best you.",  "Stay strong, stay true.",  "Live your dreams.",  "Stay positive always.",  "Dream, then do.",  "Believe, then achieve.",
  "Live life now.", "You are limitless.",  "Shine bright, dream big.",  "Keep your dreams alive.",  "Be a go-getter.",  "Live with no regrets.",  "Keep dreaming big.",  "Stay happy, stay positive.",  "Be your best self.",
  "Follow your bliss.",  "You are a star.",  "Dare to dream.",  "Believe in your journey.",  "Stay focused always.",  "Make your mark."
]; //length = 143

var quotes2 = quotes;

const isButtonClick = event => event.target.tagName.toLowerCase() === 'button';

import { createRipple } from './ripples.js';
import { createHeartRipple } from './ripples.js';
import { createStarRipple } from './ripples.js';

var currentRippleEffect = createRipple;


document.getElementById("Ripple-popup2").disabled = true; //start with buttons disabled 
document.getElementById("Ripple-popup3").disabled = true;
document.getElementById("Theme-popup2").disabled = true;
document.getElementById("Theme-popup3").disabled = true;
document.getElementById("Sound-popup2").disabled = true;
document.getElementById("Sound-popup3").disabled = true;

// Event listeners for the buttons to switch ripple effects
document.getElementById("Ripple-popup1").addEventListener('click', () => {
    currentRippleEffect = createRipple;
});

document.getElementById("Ripple-popup2").addEventListener('click', function(event) {
  if(scoreCounter >= 100){
    if(heartScoreCounter == 1){
      currentRippleEffect = createHeartRipple;
      document.getElementById("Ripple-popup2").disabled = false;
    }
    else{
      scoreCounter -= 100;
      document.getElementById("scoreText").innerHTML = scoreCounter;
      heartScoreCounter = 1;
      currentRippleEffect = createHeartRipple;
      document.getElementById("Ripple-popup2").textContent = document.getElementById("Ripple-popup2").textContent.replace(/\(100\)/, '').trim();
      document.getElementById("Ripple-popup2").disabled = false;
    } 
  }
});

document.getElementById("Ripple-popup3").addEventListener('click', function(event) {
  if(scoreCounter >= 200){
    if(starScoreCounter == 1){
      currentRippleEffect = createStarRipple;
      document.getElementById("Ripple-popup3").disabled = false;
    }
    else{
      scoreCounter -= 200;
      document.getElementById("scoreText").innerHTML = scoreCounter;
      starScoreCounter = 1;
      currentRippleEffect = createStarRipple;
      document.getElementById("Ripple-popup3").textContent = document.getElementById("Ripple-popup3").textContent.replace(/\(200\)/, '').trim();
      document.getElementById("Ripple-popup3").disabled = false;
    } 
  }
});

// General click event listener for the body
document.body.addEventListener('click', function(event) {
    if (isButtonClick(event)) return;
    currentRippleEffect(event);

    if(scoreCounter2 >= 199){
      document.getElementById("Ripple-popup3").disabled = false;
    }
    if(scoreCounter2 >= 99){
      document.getElementById("Ripple-popup2").disabled = false;
    } 
});

/*   gradient types  */

document.getElementById("gradient-box").style.backgroundImage = `linear-gradient(to left, #8A2387 , #E94057, #F27121 )`
var currentBackround = `linear-gradient(to left, #8A2387 , #E94057, #F27121 )`;

document.getElementById("Theme-popup1").addEventListener('click', () => {
  currentBackround = `linear-gradient(to left, #8A2387 , #E94057, #F27121 )`;
});

document.getElementById("Theme-popup2").addEventListener('click', function(event) {
  if(scoreCounter >= 100){
    if(MidnightScoreCounter == 1){
      currentBackround = `linear-gradient(to left, #918ca9 , #211f2f)`;
      document.getElementById("Theme-popup2").disabled = false;
    }
    else{
      scoreCounter -= 100;
      document.getElementById("scoreText").innerHTML = scoreCounter;
      MidnightScoreCounter = 1;
      currentBackround = `linear-gradient(to left, #918ca9 , #211f2f)`;
      document.getElementById("Theme-popup2").textContent = document.getElementById("Theme-popup2").textContent.replace(/\(100\)/, '').trim();
      document.getElementById("Theme-popup2").disabled = false;
    } 
  }
});

document.getElementById("Theme-popup3").addEventListener('click', function(event) {
  if(scoreCounter >= 100){
    if(BeachScoreCounter == 1){
      currentBackround = `linear-gradient(to left, #f9e7bb , #e97cbb, #3d47d9)`;
      document.getElementById("Theme-popup3").disabled = false;
    }
    else{
      scoreCounter -= 100;
      document.getElementById("scoreText").innerHTML = scoreCounter;
      BeachScoreCounter = 1;
      currentBackround = `linear-gradient(to left, #f9e7bb , #e97cbb, #3d47d9)`;
      document.getElementById("Theme-popup3").textContent = document.getElementById("Theme-popup3").textContent.replace(/\(200\)/, '').trim();
      document.getElementById("Theme-popup3").disabled = false;
    } 
  }
});

document.body.addEventListener('click', function(event) {
  document.getElementById("gradient-box").style.backgroundImage = currentBackround;

  if(scoreCounter2 >= 199){
    document.getElementById("Theme-popup3").disabled = false;
  }
  if(scoreCounter2 >= 99){
    document.getElementById("Theme-popup2").disabled = false;
  } 
});



/*   Sound types  */
var sound = bellSound;

document.getElementById("Sound-popup1").addEventListener('click', () => {
  sound = bellSound;
});

document.getElementById("Sound-popup2").addEventListener('click', function(event) {
  if(scoreCounter >= 100){
    if(WaveScoreCounter == 1){
      sound = waveSound;
      document.getElementById("Sound-popup2").disabled = false;
    }
    else{
      scoreCounter -= 100;
      document.getElementById("scoreText").innerHTML = scoreCounter;
      WaveScoreCounter = 1;
      sound = waveSound;
      document.getElementById("Sound-popup2").textContent = document.getElementById("Sound-popup2").textContent.replace(/\(100\)/, '').trim();
      document.getElementById("Sound-popup2").disabled = false;
    } 
  }
});

document.getElementById("Sound-popup3").addEventListener('click', function(event) {
  if(scoreCounter >= 100){
    if(PopScoreCounter == 1){
      sound = popSound;
      document.getElementById("Sound-popup3").disabled = false;
    }
    else{
      scoreCounter -= 100;
      document.getElementById("scoreText").innerHTML = scoreCounter;
      PopScoreCounter = 1;
      sound = popSound;
      document.getElementById("Sound-popup3").textContent = document.getElementById("Sound-popup3").textContent.replace(/\(200\)/, '').trim();
      document.getElementById("Sound-popup3").disabled = false;
    } 
  }
});

document.body.addEventListener('click', function(event) {

  if(scoreCounter2 >= 199){
    document.getElementById("Sound-popup3").disabled = false;
  }
  if(scoreCounter2 >= 99){
    document.getElementById("Sound-popup2").disabled = false;
  } 
});





/*    gradient movement   */
var move = 0;
let direction = -1;

document.body.addEventListener('click', function(event) {
  if (isButtonClick(event)) return;

  if (direction === -1) {
    move -= 900;
    if (move <= -88100) {
        direction = 1; // Change direction to move right
    }
} else if (direction === 1) {
    move += 900;
    if (move >= 0) {
        direction = -1; // Change direction to move left
    }
}
  console.log(move);
  document.getElementById("gradient-box").style.right = `${move}px`;
});



document.body.addEventListener('click', function(event) {
  if (isButtonClick(event)) return;
  
  mainCounter += 1;
  document.getElementById("bigNumber").innerHTML = mainCounter;
  
  scoreCounter += 1;
  scoreCounter2 += 1;
  document.getElementById("scoreText").innerHTML = scoreCounter;

});

/**     quotes selctor */
const quoteText =  document.getElementById("quote");

i = Math.floor(Math.random() * quotes2.length);   //starts off with a quote
quoteText.innerHTML = quotes2[i];
quotes2.splice(i,1);

document.body.addEventListener('click', function(event) { //changes quote and deletes quote after use
  if(mainCounter % 25 === 0 && mainCounter != 0){
    sound.play();
    i = Math.floor(Math.random() * quotes2.length);
    quoteText.style.opacity ='0';
    setTimeout(() => {
      quoteText.innerHTML = quotes2[i];
      quoteText.style.opacity = '1';
  }, 750);
    quotes2.splice(i,1);
    if(quotes2.length == 1){
      quotes2 = quotes;
    }
  }
});