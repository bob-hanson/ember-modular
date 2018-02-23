import Ember from 'ember';
import PatientDataMixin from 'user-audits-engine/mixins/patient-data';
import { module, test } from 'qunit';

module('Unit | Mixin | patient data');

// Replace this with your real tests.
test('it works', function(assert) {
  let PatientDataObject = Ember.Object.extend(PatientDataMixin);
  let subject = PatientDataObject.create();
  assert.ok(subject);
});
