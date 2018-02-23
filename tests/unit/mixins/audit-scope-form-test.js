import EmberObject from '@ember/object';
import AuditScopeFormMixin from 'facility-admin/mixins/audit-scope-form';
import { module, test } from 'qunit';

module('Unit | Mixin | audit scope form');

// Replace this with your real tests.
test('it works', function(assert) {
  let AuditScopeFormObject = EmberObject.extend(AuditScopeFormMixin);
  let subject = AuditScopeFormObject.create();
  assert.ok(subject);
});
