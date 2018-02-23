import Ember from 'ember';
import UserFormMixin from 'hyspa/mixins/user-form';
import { module, test } from 'qunit';

module('Unit | Mixin | user form');

// Replace this with your real tests.
test('it works', function(assert) {
  let UserFormObject = Ember.Object.extend(UserFormMixin);
  let subject = UserFormObject.create();
  assert.ok(subject);
});
