// const audioTag = document.querySelector('audio')
// const iframeTag = document.querySelector('iframe')
let musicOn = false
let tvOn = false
const tvTag = document.querySelector('#tv')
const bedroomTag = document.querySelector('#game')

function addInteractivity(){
  document.addEventListener('keydown', (e) => {
    if (e.which == 38)
      if (dodger.style.left === '150px') {
        lookBehind()
        // audioTag.paused ? audioTag.play() : audioTag.pause()
        // iframeTag.src = (musicOn ? iframeTag.src.replace(/.$/,"0") : iframeTag.src.replace(/.$/,"1"))
        // musicOn = !musicOn
        musicOn ? player.pauseVideo() : player.playVideo()
        musicOn = !musicOn
        if (musicOn) {
          dodger.className = 'music'
          dodger.style.backgroundPosition = ''
        }

        form1Tag.innerHTML = Form.renderMixtapeForm()
      } else if (dodger.style.left === '40px') {
        lookBehind()
        form1Tag.innerHTML = Form.renderNoteForm()
      } else if (dodger.style.left === '-400px') {
        lookBehind()
        form1Tag.innerHTML = Form.renderImageForm()
      } else if (dodger.style.left === '-310px') {
        lookBehind()
        tvTime()
        if (tvOn) {
          dodger.style.backgroundPosition = ''
          dodger.className = 'read'
        }
      } else {
        lookBehind()
      }

  })
}


function lookBehind() {
  dodger.style.backgroundPosition = backSprite;
}

function tvTime() {
  if (tvOn) {
    tv.style.visibility = 'hidden';
    bedroomTag.style.backgroundImage = 'url(src/assets/bedroom3.gif)'

  } else{
    tv.style.visibility = 'visible';
    bedroomTag.style.backgroundImage = 'url(src/assets/bedroom3dark.jpg)'
  }
  tvOn = !tvOn
}
