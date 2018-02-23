import Ember from 'ember';
import GeneralValidationsMixin from 'hyspa/mixins/general-validations';
import { module, test } from 'qunit';

module('Unit | Mixin | general validations');

// Replace this with your real tests.
test('it works', function(assert) {
  let GeneralValidationsObject = Ember.Object.extend(GeneralValidationsMixin);
  let subject = GeneralValidationsObject.create();
  assert.ok(subject);
});
