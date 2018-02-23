import Ember from 'ember';
import HoverStateMixin from 'hyspa-base-components/mixins/hover-state';
import { module, test } from 'qunit';

module('Unit | Mixin | hover state');

// Replace this with your real tests.
test('it works', function(assert) {
  let HoverStateObject = Ember.Object.extend(HoverStateMixin);
  let subject = HoverStateObject.create();
  assert.ok(subject);
});
