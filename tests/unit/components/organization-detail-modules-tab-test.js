import Ember from 'ember';
import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleForComponent('organization-detail-modules-tab', 'Unit | Component | organization detail modules tab', {
  needs: ['component:base-component', 'service:current-session', 'service:current-app', 'service:toast-message', 'service:repository', 'service:layout', 'service:external-links', 'service:i18n', 'service:filter-list', 'service:ripple', 'service:utilities'],
  unit: true
});

test('it has the proper classNames values', function(assert) {
  assert.expect(1);
  let component = this.subject();
  let expectedValues = 'organization-detail-modules-tab';
  assert.ok(component.get('classNames').contains(expectedValues), 'classNames has proper values');

});

test('it has the proper classNameBindings values', function(assert) {
  assert.expect(1);
  let component = this.subject();
  let expectedValues = ['colSpan'];
  assert.deepEqual(component.get('classNameBindings'), expectedValues, 'classNameBindings has proper values');
});
