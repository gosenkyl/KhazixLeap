import Ember from 'ember';

let {
  inject
  } = Ember;

export default Ember.Service.extend({

  store: inject.service(),
  userService: inject.service("user"),

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

    this.get("store").findRecord('user-champion', id).then(function (userChampion) {

      userChampion.destroyRecord();

    }).catch(function(failure){

      console.log(failure);

    });

  }

});
