import Ember from 'ember';

let {
  RSVP,
  inject
  } = Ember;

export default Ember.Component.extend({

  classNames: ['row float-left'],

  content: null,

  rest: inject.service("rest"),

  init: function(){
    this._super(...arguments);
    let self = this;

    let request = {
      requestChampions: this.get("rest").getJson("http://localhost:8080/api/riot/lol-static-datas/champions")
    };

    RSVP.hash(request).then(function(results) {
      let list = Ember.A();

      results.requestChampions.champions.forEach((item)=>{
        let champion = Ember.Object.create({});
        let obj = Object.assign(champion, item);
        obj.selected = false;

        list.addObject(obj);
      });

      self.set("content", list);
    });

  }

});
