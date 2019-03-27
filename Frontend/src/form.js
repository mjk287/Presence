formTag.addEventListener('submit', (e) => {
  e.preventDefault()


  if (e.target.id === "mixtape-form") {
    // const bodyData = { radio: e.target.songs.value }
    // Adapter.updateRoom(configObj(bodyData))
    Room.theRoom.radio = e.target.songs.value
  }
})

class Form {

  static renderMixtapeForm() {
    return `<form id="mixtape-form" action="index.html" method="post">
      <select name="songs">
        <option value="src/assets/JakobOgawa-AllYourLove.mp3">All Your Love - JakobOgawa</option>
        <option value="src/assets/AcidGhost-AllAlone.mp3">All Alone - Acid Ghost</option>
      </select>
      <input type="submit" value="Make Mixtape">
    </form>`
  }
}
