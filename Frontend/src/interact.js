// const audioTag = document.querySelector('audio')
// const iframeTag = document.querySelector('iframe')
let musicOn = false

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
