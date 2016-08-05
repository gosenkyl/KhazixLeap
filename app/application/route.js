import Ember from 'ember';

export default Ember.Route.extend({

  championService: Ember.inject.service("champion"),

  model: function(){
    return this.get("championService").getAllChampions();
  }

});
