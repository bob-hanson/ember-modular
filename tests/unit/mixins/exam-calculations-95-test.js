import Ember from 'ember';
import ExamCalculations95Mixin from 'user-audits-engine/mixins/exam-calculations-95';
import { module, test } from 'qunit';

module('Unit | Mixin | exam calculations 95');

// Replace this with your real tests.
test('it works', function(assert) {
  let ExamCalculations95Object = Ember.Object.extend(ExamCalculations95Mixin);
  let subject = ExamCalculations95Object.create();
  assert.ok(subject);
});
