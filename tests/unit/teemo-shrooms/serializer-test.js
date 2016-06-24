import { moduleForModel, test } from 'ember-qunit';

moduleForModel('teemo-shrooms', 'Unit | Serializer | teemo shrooms', {
  // Specify the other units that are required for this test.
  needs: ['serializer:teemo-shrooms']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
