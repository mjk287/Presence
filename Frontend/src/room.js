class Room {
  constructor({id, radio, note, dishes, image}) {
    this.id = id
    this.radio = radio
    this.note = note
    this.dishes = dishes
    this.image = image

    Room.theRoom = this
  }

  renderRoom(){
    const mixtape = document.querySelector('#mixtape')
    // mixtape.src = this.radio
    // audioTag.load()
  }
}

Room.theRoom = null
