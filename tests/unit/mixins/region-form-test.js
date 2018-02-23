import EmberObject from '@ember/object';
import RegionFormMixin from 'facility-admin/mixins/region-form';
import { module, test } from 'qunit';

module('Unit | Mixin | region form');

// Replace this with your real tests.
test('it works', function(assert) {
  let RegionFormObject = EmberObject.extend(RegionFormMixin);
  let subject = RegionFormObject.create();
  assert.ok(subject);
});
