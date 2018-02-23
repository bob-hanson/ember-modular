import EmberObject from '@ember/object';
import LocationFormMixin from 'facility-admin/mixins/location-form';
import { module, test } from 'qunit';

module('Unit | Mixin | location form');

// Replace this with your real tests.
test('it works', function(assert) {
  let LocationFormObject = EmberObject.extend(LocationFormMixin);
  let subject = LocationFormObject.create();
  assert.ok(subject);
});
