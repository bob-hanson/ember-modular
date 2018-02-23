import { moduleForModel, test } from 'ember-qunit';

moduleForModel('audit-icd10-code', 'Unit | Model | audit icd10 code', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
