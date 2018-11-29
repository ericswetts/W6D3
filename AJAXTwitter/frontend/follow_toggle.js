class FollowToggle {
  constructor($el) {
    this.$el = $el;
    debugger
    this.userID = this.$el.data("user-id");
    debugger
    this.followState = $el.data("initial-follow-state");
    this.render();
  }

}


FollowToggle.prototype.render = function () {
  if (this.followState === "unfollowed") {
    $("button.followToggle").append("Follow!");
  } else if (this.followState === "followed") {
    $("button.followToggle").append("Unfollow!");
  }
};
module.exports = FollowToggle;
