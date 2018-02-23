import EmberObject from '@ember/object';
import InputValidationMixin from 'hyspa-base-components/mixins/input-validation';
import { module, test } from 'qunit';

module('Unit | Mixin | input validation');

// Replace this with your real tests.
test('it works', function(assert) {
  let InputValidationObject = EmberObject.extend(InputValidationMixin);
  let subject = InputValidationObject.create();
  assert.ok(subject);
});
