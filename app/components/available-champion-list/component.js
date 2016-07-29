import Ember from 'ember';

let {
  Component,
  computed
  } = Ember;

export default Component.extend({

  classNames: ["flex-grow"],

  content: null,

  availableChampions: computed.filterBy("content", "selected", false),

  actions: {
    /*dragStart: function(champion){
      console.log("DRAG START", champion);
    },

    dragEnd: function(champion){
      console.log("DRAG END", champion);
    }*/
  }

});
