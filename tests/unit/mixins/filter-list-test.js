import Ember from 'ember';
import FilterListMixin from 'hyspa/mixins/filter-list';
import { module, test } from 'qunit';

module('Unit | Mixin | filter list');

// Replace this with your real tests.
test('it works', function(assert) {
  let FilterListObject = Ember.Object.extend(FilterListMixin);
  let subject = FilterListObject.create();
  assert.ok(subject);
});
