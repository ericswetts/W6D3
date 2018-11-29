const FollowToggle = require("./follow_toggle");


$( () => {
  let $followToggle = $('button.follow-toggle');
  // let buttons = [];
  $followToggle.each((idx, el) => new FollowToggle(el));

});
