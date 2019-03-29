// Your code here
// const thePanelTag = document.querySelector('#ThePanel')
let index = 0

function on() {
    document.getElementById("overlay").style.display = "block";

}

function off() {
    document.getElementById("overlay").style.display = "none";

}

on();

function addMovement() {
    document.addEventListener('keydown', function(e) {
        if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
            off()
        }
        // window.scrollTo(dodger.style.left, 0)
        dodger.className = ''
        standDodger()
        if (e.which == 37) {
            moveDodgerLeft()
        } else if (e.which == 39) {
            moveDodgerRight()
        } else if (e.which == 40) {
            lookForward()
        }
    })
}


function moveDodgerLeft() {
    const style = window.getComputedStyle(dodger)

    let leftNumbers = style.left.replace('px', '')
    let left = parseInt(leftNumbers, 10)
    let rightNumbers = style.right.replace('px', '')
    let right = parseInt(rightNumbers, 10)

    // if (left > 0) {
    dodger.style.left = `${left - 10}px`
    dodger.style.right = `${right + 10}px`
    // }
    musicOn ? animateLeftDance() : animateLeftDodger()
}

function moveDodgerRight() {
    const style = window.getComputedStyle(dodger)

    let rightNumbers = style.right.replace('px', '')
    let right = parseInt(rightNumbers, 10)
    let leftNumbers = style.left.replace('px', '')
    let left = parseInt(leftNumbers, 10)

    // if (right > 56) {
    dodger.style.right = `${right - 10}px`
    dodger.style.left = `${left + 10}px`
    // }
    musicOn ? animateRightDance() : animateRightDodger()

}

function lookForward() {
    dodger.style.backgroundPosition = forwardSprite;
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

function animateRightDance() {
    if (index < 2) {
        dodger.style.backgroundPosition = leftSprite[index];
        index += 1;
    } else {
        index = 0;
        dodger.style.backgroundPosition = leftSprite[index];
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

function animateLeftDance() {
    if (index < 2) {
        dodger.style.backgroundPosition = rightSprite[index];
        index += 1;
    } else {
        index = 0;
        dodger.style.backgroundPosition = rightSprite[index];
        index += 1;
    }
}

function standDodger() {
    dodger.style.height = `108px`;
}

// function renderMission() {
//     return '<div class="insidePanel"> <h1>Who?</h1> <p class="content"> </p> </div>'
// }
//
// thePanelTag.innerHTML = renderMission();

// function readDodger() {
//   bookSprite.forEach(function(action){
//     setTimeout
//   }
// }