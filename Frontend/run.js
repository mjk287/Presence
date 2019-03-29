document.addEventListener('DOMContentLoaded', () => {
  Adaptor.getRoom().then((roomData) =>{
    const roomObj = new Room(roomData)

    roomObj.renderRoom()
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    const scripts = document.getElementsByTagName('script')
    const lastScriptTag = scripts[scripts.length - 1];
    lastScriptTag.parentNode.insertBefore(tag, lastScriptTag);


  })

})

addMovement()
addInteractivity()

window.addEventListener('beforeunload', (e) => {
  const request = new XMLHttpRequest();

  request.open("PUT","http://localhost:3000/rooms/2", false);
  request.setRequestHeader("content-type","application/json");
  request.send(JSON.stringify(Room.theRoom));

  // Adapter.updateRoom(configObj)
  return null
})
