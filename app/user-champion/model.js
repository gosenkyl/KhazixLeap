import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({

  userId: DS.attr(),
  championId: DS.attr(),
  typeId: DS.attr()

});
