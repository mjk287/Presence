form1Tag.addEventListener('submit', (e) => {
  e.preventDefault()


  if (e.target.id === "mixtape-form") {
    // const bodyData = { radio: e.target.songs.value }
    // Adapter.updateRoom(configObj(bodyData))
    const input = e.target.songUrl.value
    const video_id = input.split('v=')[1]

    Room.theRoom.radio = video_id
  } else if (e.target.id === "note-form") {
    Room.theRoom.note = e.target.myNote.value
  }
})

class Form {

  static renderMixtapeForm() {
    return `<form class="insidePanel" id="mixtape-form" action="index.html" method="post">
      <input type="text" name="songUrl" placeholder="A Youtube Url"><br>
      <input type="submit" value="Make Mixtape">
    </form>`
  }

  static renderNoteForm() {
    return `<form class="insidePanel" id="note-form" action="index.html" method="post">
      <textarea name="myNote">${Room.theRoom.note}</textarea><br>
      <input type="submit" id='note-button' value="Write Note">
    </form>`
  }
}
