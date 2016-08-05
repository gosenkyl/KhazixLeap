import Ember from 'ember';

let {
  Component,
  computed,
  isEmpty
  } = Ember;

export default Component.extend({

  classNames: ["available-container flex-50"],

  content: null,

  availableHeaderText: "AVAILABLE",

  availableChampions: computed.filterBy("content", "selected", false),

  searchText: null,

  searchChampions: computed("availableChampions.[]", "searchText", function(){

    if(isEmpty(this.get("searchText"))){
      return this.get("availableChampions");
    }

    let lowerSearchText = this.get("searchText").toLowerCase();

    return this.get("availableChampions").filter(champion => {

      if(champion.get("name").toLowerCase().indexOf(lowerSearchText) !== -1){
        return true;
      }

      return false;
    });

  }),

  actions: {
    /*dragStart: function(champion){
      console.log("DRAG START", champion);
    },

    dragEnd: function(champion){
      console.log("DRAG END", champion);
    }*/
  }

});
