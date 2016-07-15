import Ember from 'ember';

let {
  Component,
  computed
  } = Ember;

export default Component.extend({

  content: null,

  selectedChampions: computed.filterBy("content", "selected", true),

  championsSelected: computed("selectedChampions.[]", function(){
    return this.get("selectedChampions.length") > 0;
  }),

  actions: {

    dropChampion: function (object/*, params*/) {

      this.store.createRecord("user-champion", {
        userId: 1,
        championId: 'Rengar',
        typeId: 'BUY'
      });

      object.set("selected", true);
      console.log("DROP CHAMPION", object);
    },

    dragOver: function () {
      console.log("DRAG OVER");
    },

    dragOut: function () {
      console.log("DRAG OUT");
    },

    clearAll: function (){
      this.get("content").forEach((champion)=>{
        champion.set("selected", false);
      });
    }

  }

});
