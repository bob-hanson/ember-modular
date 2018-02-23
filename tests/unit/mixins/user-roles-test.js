import Ember from 'ember';
import UserRolesMixin from 'hyspa/mixins/user-roles';
import { module, test } from 'qunit';

module('Unit | Mixin | user roles');

// Replace this with your real tests.
test('it works', function(assert) {
  let UserRolesObject = Ember.Object.extend(UserRolesMixin);
  let subject = UserRolesObject.create();
  assert.ok(subject);
});
