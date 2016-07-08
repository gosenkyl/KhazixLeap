import Ember from 'ember';

let {
  RSVP,
  inject,
  computed
  } = Ember;

export default Ember.Component.extend({

  classNames: ['row'],

  content: null,

  selectedChampions: computed.filterBy("content", "selected", true),
  availableChampions: computed.filterBy("content", "selected", false),

  championsSelected: computed("selectedChampions.[]", function(){
    return this.get("selectedChampions.length") > 0;
  }),

  rest: inject.service("rest"),

  init: function(){
    this._super(...arguments);
    let self = this;

    let request = {
      requestChampions: this.get("rest").getJson("http://localhost:8080/api/riot/lol-static-datas/champions")
    };

    Ember.RSVP.hash(request).then(function(results) {
      let list = Ember.A();

      results.requestChampions.champions.forEach((item)=>{
        let champion = Ember.Object.create({});
        let obj = Object.assign(champion, item);
        obj.selected = false;

        list.addObject(obj);
      });

      self.set("content", list);
    });

  },

  actions: {

    dropChampion: function (object/*, params*/) {
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
