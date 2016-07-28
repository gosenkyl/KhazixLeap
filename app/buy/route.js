import Ember from 'ember';

export default Ember.Route.extend({

  type: "BUY",

  championService: Ember.inject.service("champion"),
  userChampionService: Ember.inject.service("user-champion"),

  model: function(){

    return new Ember.RSVP.Promise(resolve => {

      this.get("championService").getAllChampions().then(champions => {

        this.get("userChampionService").getUserChampions(this.get("type")).then(userChampions => {

          userChampions.forEach(userChampion => {

            champions.forEach(champion => {
              if (champion.get("id") == userChampion.get("championId")) {
                champion.set("selected", true);
              }
            });

          });

          resolve(champions);

        });

      });

    });

  }

});
