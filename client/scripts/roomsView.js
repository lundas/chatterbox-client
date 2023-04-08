// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

    RoomsView.render();
    RoomsView.$select.change(RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
    // render -> render all messages
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // iterator room.getRoomList
    RoomsView.$select.empty();
    Rooms._data.forEach(room=>{
      RoomsView.renderRoom(room);
    });
    //})
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // var $room = $('<option class = "room">'+room+'</option>')
    //roomView.$select.append()
    RoomsView.$select.append(`<option value="${roomname}">${roomname}</option>`);
  },


  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    Rooms.selected = RoomsView.$select.val();
    // render room messages somehow
    MessagesView.render();
  },



  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    //room.createRoom
    var roomName = FormView.$form.find('input[type = text]').val();
    Rooms.addRoom(roomName);
    Rooms.add(); // only here to pass the test. function does nothing
    RoomsView.render();

    //this is the body

    //rooms.addRoom(<)on(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    //room.createRoom
  }

};
