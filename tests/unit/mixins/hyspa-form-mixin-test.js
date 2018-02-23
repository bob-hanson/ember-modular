import EmberObject from '@ember/object';
import HyspaFormMixinMixin from 'hyspa-form-components/mixins/hyspa-form-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | hyspa form mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let HyspaFormMixinObject = EmberObject.extend(HyspaFormMixinMixin);
  let subject = HyspaFormMixinObject.create();
  assert.ok(subject);
});
