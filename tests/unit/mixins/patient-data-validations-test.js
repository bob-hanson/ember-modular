import EmberObject from '@ember/object';
import PatientDataValidationsMixin from 'facility-encounters/mixins/patient-data-validations';
import { module, test } from 'qunit';

module('Unit | Mixin | patient data validations');

// Replace this with your real tests.
test('it works', function(assert) {
  let PatientDataValidationsObject = EmberObject.extend(PatientDataValidationsMixin);
  let subject = PatientDataValidationsObject.create();
  assert.ok(subject);
});
