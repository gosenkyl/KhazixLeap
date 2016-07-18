import Ember from 'ember';

let {
  Component,
  computed,
  inject
  } = Ember;

export default Component.extend({

  content: null,

  selectedChampions: computed.filterBy("content", "selected", true),

  championsSelected: computed("selectedChampions.[]", function(){
    return this.get("selectedChampions.length") > 0;
  }),

  userChampionService: inject.service("user-champion"),

  type: null,

  actions: {

    dropChampion: function (champion/*, params*/) {

      this.get("userChampionService").createUserChampion(champion, this.get("type"));

      champion.set("selected", true);
      console.log("DROP CHAMPION", champion);
    },

    dragOver: function () {
      console.log("DRAG OVER");
    },

    dragOut: function () {
      console.log("DRAG OUT");
    },

    /*dragStart: function(champion){
      console.log("DRAG START", champion);
    },

    dragEnd: function(champion){
      console.log("DRAG END", champion);
    },*/

    clearAll: function (){
      this.get("content").forEach((champion)=>{

        if(champion.get("selected") === true) {
          champion.set("selected", false);
          this.get("userChampionService").deleteUserChampion(champion, this.get("type"));
        }
      });
    }

  }

});
