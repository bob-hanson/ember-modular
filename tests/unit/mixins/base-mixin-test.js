import Ember from 'ember';
import BaseMixinMixin from 'hyspa-base-components/mixins/base-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | base mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let BaseMixinObject = Ember.Object.extend(BaseMixinMixin);
  let subject = BaseMixinObject.create();
  assert.ok(subject);
});
