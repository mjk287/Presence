const audioTag = document.querySelector('audio')

function addInteractivity(){
  document.addEventListener('keydown', (e) => {
    if (e.which == 38)
      if (dodger.style.left === '150px') {
        lookBehind()
        audioTag.paused ? audioTag.play() : audioTag.pause()
        formTag.innerHTML = Form.renderMixtapeForm()
      } else if (dodger.style.left === '40px') {
        lookBehind()
        formTag.innerHTML = Form.renderNoteForm()
      } else {
        lookBehind()
      }

  })
}


function lookBehind() {
  dodger.style.backgroundPosition = backSprite;
}
