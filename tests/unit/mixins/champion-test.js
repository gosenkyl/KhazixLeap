import Ember from 'ember';
import ChampionMixin from 'khazix-leap/mixins/champion';
import { module, test } from 'qunit';

module('Unit | Mixin | champion');

// Replace this with your real tests.
test('it works', function(assert) {
  let ChampionObject = Ember.Object.extend(ChampionMixin);
  let subject = ChampionObject.create();
  assert.ok(subject);
});
