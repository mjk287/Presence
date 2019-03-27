document.addEventListener('DOMContentLoaded', () => {
  Adaptor.getRoom().then((roomData) =>{
    const roomObj = new Room(roomData)

    roomObj.renderRoom()
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
