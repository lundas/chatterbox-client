// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
    $('.chat .username').on('click', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // if rooms.selected !== ''
    MessagesView.$chats.empty();
    Messages._data.forEach(function(message) {
      if (Rooms.selected !== '' && message.roomname === Rooms.selected) {
        MessagesView.renderMessage(message);
      } else
      if (Rooms.selected === '') {
        MessagesView.renderMessage(message);
      }
    });

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var $message = MessageView.render(message);
    MessagesView.$chats.append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // var username = $(this).children()[0];
    console.log('handleClick this:', this);
    Friends.addFriend($(this).text());
    // Friends.toggleStatus();
    // console.log($(username).text());
  }
};