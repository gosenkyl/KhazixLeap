import Ember from 'ember';

let {
  Route,
  inject
  } = Ember;

export default Route.extend({

  type: "BAN",

  userChampionService: inject.service("user-champion"),

  model: function(){
    return this.get("userChampionService").getChampionsByUserAndType(this.get("type"));
  }

});
