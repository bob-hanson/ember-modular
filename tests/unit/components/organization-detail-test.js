import Ember from 'ember';
import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleForComponent('organization-detail', 'Unit | Component | organization detail', {
  needs: ['component:base-component', 'service:current-session', 'service:current-app', 'service:toast-message', 'service:repository', 'service:layout', 'service:external-links', 'service:i18n', 'service:filter-list', 'service:ripple', 'service:utilities'],
  unit: true
});

test('it has the proper classNames values', function(assert) {
  assert.expect(1);
  let component = this.subject();
  let expectedValues = 'organization-detail';
  assert.ok(component.get('classNames').contains(expectedValues), 'classNames has proper values');
  component.i18n = { t: function () {} };
});

test('it has the proper classNameBindings values', function(assert) {
  assert.expect(1);
  let component = this.subject();
  let expectedValues = ['colSpan'];
  assert.deepEqual(component.get('classNameBindings'), expectedValues, 'classNameBindings has proper values');
  component.i18n = { t: function () {} };
});

test('percentageWidth should be 50', function(assert) {
  assert.expect(1);
  let component = this.subject();
  let expectedValue = 50;

  assert.equal(component.get('percentageWidth'), expectedValue, 'percentageWidth equals 50');
  component.i18n = { t: function () {} };
});
