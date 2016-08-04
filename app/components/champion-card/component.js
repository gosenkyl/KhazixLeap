import Ember from 'ember';

let{
  computed
  } = Ember;

export default Ember.Component.extend({

  classNames: ["champion champion-shadow center-horizontally"],

  content: null,

  imageSrc: computed("content", function(){
    return "http://ddragon.leagueoflegends.com/cdn/6.12.1/img/champion/"+this.get("content.image.full");
  })

});
