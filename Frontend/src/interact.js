const audioTag = document.querySelector('audio')

function addInteractivity(){
  document.addEventListener('keydown', (e) => {
    if (e.which == 38)
      if (dodger.style.left === '150px') {
        lookBehind()
        audioTag.paused ? audioTag.play() : audioTag.pause()
        formTag.innerHTML = Form.renderMixtapeForm()
      } else {
        lookBehind()
      }

  })
}


function lookBehind() {
  dodger.style.backgroundPosition = backSprite;
}
