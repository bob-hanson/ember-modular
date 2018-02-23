import Ember from 'ember';
import RepeatedFormComponentMixinMixin from 'hyspa-form-components/mixins/repeated-form-component-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | repeated form component mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let RepeatedFormComponentMixinObject = Ember.Object.extend(RepeatedFormComponentMixinMixin);
  let subject = RepeatedFormComponentMixinObject.create();
  assert.ok(subject);
});
