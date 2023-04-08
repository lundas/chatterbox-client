// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  createRoom: function(roomName) {
    var room = {};
    room.name = roomName;
    room.selected = false;
    room.messages = [];
    _data.push(room);
  },

  // iterate through rooms in _data
  // if room.name === roomName;
  // change room.selected === true;
  selectRoom: function(roomName) {
    // trigger variable

    for (var i = 0; i < _data.length; i++) {
      if (_data[i].name === roomName) {
        _data[i].selected = true;
        trigger = true;
        // break;
      } else {
        _data[i].selected = false;
      }
    }
    // createRoom if roomName  not exists
    // if trigger variable is false, call createRoom with isSelected as true

  },

  // inputs: message
  // side effect: update room message list
  //
  updateRoomMessage: null//renderRoom()

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};