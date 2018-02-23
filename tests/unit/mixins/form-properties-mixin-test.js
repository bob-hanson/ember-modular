import EmberObject from '@ember/object';
import FormPropertiesMixinMixin from 'hyspa-form-components/mixins/form-properties-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | form properties mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let FormPropertiesMixinObject = EmberObject.extend(FormPropertiesMixinMixin);
  let subject = FormPropertiesMixinObject.create();
  assert.ok(subject);
});
