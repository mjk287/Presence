testTag = document.querySelector('#test')


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
  } else if (e.target.id === "image-form") {
    const formStuff = document.querySelector('#image-form')
    // let fileList = e.target.myFile.files
    const formData = new FormData(formStuff)
    for (var [key, value] of formData.entries()) {
      console.log(key, value);
    }
    // Array.from(fileList[0]).forEach((file) => {
    //   debugger
    //   formData.append('files[]', file)
    // })
    fetch('http://localhost:3000/rooms/2', {
      method: "PATCH",
      body: formData
    });
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

  static renderImageForm() {
    return `<form class="picturePanel" id="image-form">
      <input type="file" name="files"><br>
      <input type="submit" id='image-button' value="Place Picture"><br>
        <img src="http://localhost:3000/${Room.theRoom.image}" alt="" id="pictureFrame">

    </form>`
  }
}
