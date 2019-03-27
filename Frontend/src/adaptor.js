class Adaptor {
  static getRoom() {
    return fetch('http://localhost:3000/rooms')
    .then(resp => resp.json())
  }

  static updateRoom(configObj) {
    // make sure to change this when there are many rooms
    return fetch('http://localhost:3000/rooms/2', configObj)
  }
}

const configObj = (bodyData) => {
    return { method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(Room.theRoom) }
}
