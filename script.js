const cloud1                  = document.querySelector('.cloud-1');
const cloud2                  = document.querySelector('.cloud-2');
const cloud3                  = document.querySelector('.cloud-3');
const tower1Roof              = document.querySelector('.tower-1-roof');
const tower1Body              = document.querySelector('.tower-1-body');
const roundHouse1Roof         = document.querySelector('.round-house-1-roof');
const roundHouse1Body         = document.querySelector('.round-house-1-body');
const tower2Roof              = document.querySelector('.tower-2-roof');
const tower2CrossVt           = document.querySelector('.tower-2-cross-vt');
const tower2CrossHz           = document.querySelector('.tower-2-cross-hz');
const tower2Body              = document.querySelector('.tower-2-body');
const tower3Roof              = document.querySelector('.tower-3-roof');
const tower3Body              = document.querySelector('.tower-3-body');
const fatHouse1Roof           = document.querySelector('.fat-house-1-roof');
const fatHouse1RoofSlope      = document.querySelector('.fat-house-1-roof-slope');
const fatHouse1Body           = document.querySelector('.fat-house-1-body');
const fatHouse2Roof           = document.querySelector('.fat-house-2-roof');
const fatHouse2RoofSlope      = document.querySelector('.fat-house-2-roof-slope');
const fatHouse2Body           = document.querySelector('.fat-house-2-body');
const triangleHouse1Roof      = document.querySelector('.triangle-house-roof');
const triangleHouseRoofSlope  = document.querySelector('.triangle-house-roof-slope');
const triangleHouseFrontFace  = document.querySelector('.triangle-house-front-face');
const triangleHouseSideFace   = document.querySelector('.triangle-house-side-face');
const stepHouse11             = document.querySelector('.step-house-1-1');
const stepHouse12             = document.querySelector('.step-house-1-2');
const stepHouse13             = document.querySelector('.step-house-1-3');
const stepHouse14             = document.querySelector('.step-house-1-4');
const stepHouse15             = document.querySelector('.step-house-1-5');
const stepHouse2BackFace      = document.querySelector('.step-house-2-back-face');
const stepHouse21             = document.querySelector('.step-house-2-1');
const stepHouse22             = document.querySelector('.step-house-2-2');
const stepHouse23             = document.querySelector('.step-house-2-3');
const stepHouse24             = document.querySelector('.step-house-2-4');
const birdContainer           = document.querySelector('.bird-container');
const bird                    = document.querySelector('.bird');

startAnimation();

function startAnimation() {
  tower1Roof.classList.add('animate');
  tower1Body.classList.add('animate');
  tower2Roof.classList.add('animate');
  tower2CrossVt.classList.add('animate');
  tower2CrossHz.classList.add('animate');
  tower2Body.classList.add('animate');
  setTimeout(() => {
    roundHouse1Roof.classList.add('animate');
    roundHouse1Body.classList.add('animate');
  }, 1000);
  setTimeout(() => {
    stepHouse11.classList.add('animate');
    stepHouse12.classList.add('animate');
    stepHouse13.classList.add('animate');
    stepHouse14.classList.add('animate');
    stepHouse15.classList.add('animate');
  }, 1500);
  setTimeout(() => {
    triangleHouse1Roof.classList.add('animate'); 
    triangleHouseRoofSlope.classList.add('animate');
    triangleHouseFrontFace.classList.add('animate');
    triangleHouseSideFace.classList.add('animate');
  }, 2300);
  setTimeout(() => {
    fatHouse1Roof.classList.add('animate');
    fatHouse1RoofSlope.classList.add('animate');
    fatHouse1Body.classList.add('animate');
  }, 3600);
  setTimeout(() => {
    tower3Roof.classList.add('animate');
    tower3Body.classList.add('animate');
  }, 4000);
  setTimeout(() => {
    stepHouse2BackFace.classList.add('animate');
    stepHouse21.classList.add('animate');
    stepHouse22.classList.add('animate');
    stepHouse23.classList.add('animate');
    stepHouse24.classList.add('animate');
    birdContainer.classList.add('animate');
    bird.classList.add('animate');
  }, 6000);
  setTimeout(() => {
    cloud1.classList.add('animate');
    cloud2.classList.add('animate');
    cloud3.classList.add('animate');
  }, 6500);
  setTimeout(() => {
    fatHouse2Roof.classList.add('animate');
    fatHouse2RoofSlope.classList.add('animate');
    fatHouse2Body.classList.add('animate');
  }, 7000);

  // Set bird animation cycles. (lines up with stepHouse2)
  setTimeout(() => {
    const birdFlapIntervalRemove = setInterval( function() {
      bird.classList.remove('reset');
    }, 10000);
  }, 6000);
  setTimeout(() => {
    bird.classList.add('reset');
    const birdFlapIntervalAdd = setInterval( function() {
      bird.classList.add('reset');
    }, 10000);
  }, 12000);
}

