import Ember from 'ember';
import AuditBoxRoutesMixin from 'user-audits-engine/mixins/audit-box-routes';
import { module, test } from 'qunit';

module('Unit | Mixin | audit box routes');

// Replace this with your real tests.
test('it works', function(assert) {
  let AuditBoxRoutesObject = Ember.Object.extend(AuditBoxRoutesMixin);
  let subject = AuditBoxRoutesObject.create();
  assert.ok(subject);
});
