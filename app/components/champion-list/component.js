import Ember from 'ember';

let {
  Component,
  computed
  } = Ember;

export default Component.extend({

  classNames: ["row champion-list"],

  content: null,
  containerSize: "full",

  columnSizeClasses: computed('containerSize', function(){
    let classes = "col-xs-12 col-sm-3 col-md-2 col-lg-1";

    if(this.get("containerSize") === "full"){
      classes = "col-xs-12 col-sm-3 col-md-2 col-lg-1";
    } else if(this.get("containerSize") === "half"){
      classes = "col-xs-12 col-sm-12 col-md-6 col-lg-3";
    }

    return classes;
  }),

  actions: {

    dragStart: function(champion){
      console.log("DRAG START", champion);
    },

    dragEnd: function(champion){
      console.log("DRAG END", champion);
    }

  }

});
