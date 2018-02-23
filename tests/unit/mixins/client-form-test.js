import Ember from 'ember';
import ClientFormMixin from 'hyspa/mixins/client-form';
import { module, test } from 'qunit';

module('Unit | Mixin | client form');

// Replace this with your real tests.
test('it works', function(assert) {
  let ClientFormObject = Ember.Object.extend(ClientFormMixin);
  let subject = ClientFormObject.create();
  assert.ok(subject);
});
