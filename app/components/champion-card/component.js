import Ember from 'ember';

let{
  computed
  } = Ember;

export default Ember.Component.extend({

  classNames: ["champion champion-shadow center-horizontally"],

  content: null,

  imageSrc: computed("content", function(){
    return "/assets/images/"+this.get("content.image.full");
  })

});
