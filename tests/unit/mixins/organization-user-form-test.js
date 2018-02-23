import Ember from 'ember';
import OrganizationUserFormMixin from 'hyspa/mixins/organization-user-form';
import { module, test } from 'qunit';

module('Unit | Mixin | organization user form');

// Replace this with your real tests.
test('it works', function(assert) {
  let OrganizationUserFormObject = Ember.Object.extend(OrganizationUserFormMixin);
  let subject = OrganizationUserFormObject.create();
  assert.ok(subject);
});
