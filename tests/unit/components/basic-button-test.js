import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleForComponent('basic-button', 'Unit | Component | basic button', {
  // Specify the other units that are required for this test
  needs: ['component:base-component', 'component:basic-button', 'service:current-session', 'service:current-app', 'service:toast-message', 'service:repository', 'service:layout', 'service:external-links', 'service:i18n', 'service:filter-list', 'service:ripple', 'service:utilities'],
  unit: true
});

test('it has the proper classNames values', function(assert) {
  assert.expect(1);
  let component = this.subject();
  let expectedValues = 'basic-button';

  assert.ok(component.get('classNames').contains(expectedValues), 'classNames has proper values');

});

test('it has the proper classNameBindings values', function(assert) {
  assert.expect(1);
  let component = this.subject();
  let expectedValues = ['isDisabled:is-disabled'];

  assert.deepEqual(component.get('classNameBindings'), expectedValues, 'classNameBindings has proper values');

});

test('click calls this.attrs.clickAction', function(assert) {
  assert.expect(2);
  let component = this.subject();
  component.attrs = {
    mouseEnterAction: function () {},
    mouseLeaveAction: function () {},
    clickAction: function () {}
  };
  component.ripple = { initRipple: function () { } };

  component.attrs.clickAction = this.stub(component.attrs, 'clickAction');
  component.set('actionModel', 'Foo Fighters');
  component.click();
  assert.ok(component.attrs.clickAction.calledWithExactly, 'Foo Fighters');
  component.set('actionModel', null);
  component.click();
  assert.ok(component.attrs.clickAction.called);
});

test('mouseEnter calls this.attrs.mouseEnterAction', function(assert) {
  assert.expect(1);
  let component = this.subject();
  component.attrs = {
    mouseEnterAction: function () {},
    mouseLeaveAction: function () {},
    clickAction: function () {}
  };

  component.attrs.mouseEnterAction = this.stub(component.attrs, 'mouseEnterAction');
  component.mouseEnter();
  assert.ok(component.attrs.mouseEnterAction.calledOnce);
});

test('mouseLeave calls this.attrs.mouseLeaveAction', function(assert) {
  assert.expect(1);
  let component = this.subject();
  component.attrs = {
    mouseEnterAction: function () {},
    mouseLeaveAction: function () {},
    clickAction: function () {}
  };

  component.attrs.mouseLeaveAction = this.stub(component.attrs, 'mouseLeaveAction');
  component.mouseLeave();
  assert.ok(component.attrs.mouseLeaveAction.calledOnce);
});
