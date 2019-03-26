// Your code here

const dodger = document.querySelector('#dodger')
let style = window.getComputedStyle(dodger)

const rightSprite = [`-1px -152px`, `-62px -152px`, `-126px -148px`, `-190px -152px`]
const leftSprite = [`-2px -404px`, `-66px -408px`, `-130px -404px`, `-194px -408px`]
const forwardSprite = `-2px -20px`
const backSprite = `-2px -280px`
const tvSprite = `-130px -280px`
const bookSprite = [`-2px -544px`, `-66px -548px`, `-130px -556px`, `-194px -556px`]
let index = 0

document.addEventListener('keydown', function(e) {
  e.preventDefault()
  console.log(e.which)
  standDodger()
  if (e.which == 37) {
    moveDodgerLeft()
  }
  else if (e.which == 39) {
    moveDodgerRight()
  }
  else if (e.which == 40) {
    lookForward()
  }
  else if (e.which == 38) {
    lookBehind()
  }
})

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)
  let rightNumbers = dodger.style.right.replace('px', '')
  let right = parseInt(rightNumbers, 10)

  if (left > 0) {
  dodger.style.left = `${left - 10}px`
  dodger.style.right = `${right + 10}px`
  }
  animateLeftDodger()
}

function moveDodgerRight() {
  let rightNumbers = dodger.style.right.replace('px', '')
  let right = parseInt(rightNumbers, 10)
  let leftNumbers = dodger.style.left.replace('px', '')
  let left = parseInt(leftNumbers, 10)

  if (right > 0) {
    dodger.style.right = `${right - 10}px`
    dodger.style.left = `${left + 10}px`
  }
  animateRightDodger()
}

function lookForward() {
  dodger.style.backgroundPosition = forwardSprite;
}

function lookBehind() {
  if (dodger.style.left == '40px') {
    dodger.style.backgroundPosition = tvSprite;
    dodger.style.height = '80px'
  } else {
  dodger.style.backgroundPosition = backSprite;
 }
}

function animateRightDodger() {
  if (index < rightSprite.length) {
    dodger.style.backgroundPosition = rightSprite[index];
    index += 1;
  } else {
    index = 0;
    dodger.style.backgroundPosition = rightSprite[index];
    index += 1;
  }
}

function animateLeftDodger() {
  if (index < leftSprite.length) {
    dodger.style.backgroundPosition = leftSprite[index];
    index += 1;
  } else {
    index = 0;
    dodger.style.backgroundPosition = leftSprite[index];
    index += 1;
  }
}

function standDodger() {
  dodger.style.height = `108px`;
}

// function readDodger() {
//   bookSprite.forEach(function(action){
//     setTimeout
//   }
// }
