import Ember from 'ember';
import ExamCalculations97Mixin from 'user-audits-engine/mixins/exam-calculations-97';
import { module, test } from 'qunit';

module('Unit | Mixin | exam calculations 97');

// Replace this with your real tests.
test('it works', function(assert) {
  let ExamCalculations97Object = Ember.Object.extend(ExamCalculations97Mixin);
  let subject = ExamCalculations97Object.create();
  assert.ok(subject);
});
