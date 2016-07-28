import Model from 'ember-data/model';
import DS from 'ember-data';
import ChampionMixin from '../mixins/champion';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend(ChampionMixin, {
  //allytips: , // List<String>
  blurb: DS.attr(),
  //enemytips: , // List<String>
  image: DS.attr('image'), // Image
  //info: , // Info
  key: DS.attr(),
  lore: DS.attr(),
  name: DS.attr(),
  partype: DS.attr(),
  //passive: , // Passive
  //recommended: , // List<Recommended>
  //skins: , // List<Skin>
  //spells: , // List<ChampionSpell>
  //stats: , // Stats
  //tags: , // List<String>
  title: DS.attr() // String

});
