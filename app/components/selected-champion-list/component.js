import Ember from 'ember';

let {
  Component,
  computed,
  inject
  } = Ember;

export default Component.extend({

  classNames: ["selected-container flex-50"],

  content: null,

  selectedHeaderText: "SELECTED",

  selectedChampions: computed.filterBy("content", "selected", true),

  isChampionsSelected: computed("selectedChampions.[]", function(){
    return this.get("selectedChampions.length") > 0;
  }),

  borderClass: computed("isChampionsSelected", function(){
    return this.get("isChampionsSelected") ? "border-bot" : "";
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

      this.get("selectedChampions").forEach(champion=>{
          this.get("userChampionService").deleteUserChampion(champion, this.get("type"));
          champion.set("selected", false);
      });

    }

  }

});
