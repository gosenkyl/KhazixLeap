import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service(),

  getAllChampions: function(){
    return this.get("store").findAll("champion");
  }

});
