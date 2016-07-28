import Ember from 'ember';

let {
  inject
  } = Ember;

export default Ember.Service.extend({

  store: inject.service(),
  userService: inject.service("user"),

  getUserChampions: function(type){
    return this.get("store").query("user-champion", {userId: this.get("userService").get("userId"), type: type});
  },

  createUserChampion: function(champion, type){
    let userChampion = this.get("store").createRecord("user-champion", {
      userId: this.get("userService.userId"),
      championId: champion.get("id"),
      typeId: type
    });

    userChampion.save();
  },

  deleteUserChampion: function(champion, type){
    let id = this.get("userService.userId") + "-" +  champion.get("id") + "-" + type;

    let userChampion = this.get("store").peekRecord('user-champion', id);

    userChampion.destroyRecord();
  }

});
