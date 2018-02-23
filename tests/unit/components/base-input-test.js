import Ember from 'ember';
import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleForComponent('base-input', 'Unit | Component | base input', {
  needs: ['component:base-component', 'component:base-input', 'service:current-session', 'service:current-app', 'service:toast-message', 'service:repository', 'service:layout', 'service:external-links', 'service:i18n', 'service:filter-list', 'service:ripple', 'service:utilities'],
  unit: true
});

test('it has the proper classNameBindings values', function(assert) {
  assert.expect(1);
  let component = this.subject();
  let expectedValues = ['colSpan', 'isDisabled:is-disabled', 'isInvalid:is-invalid', 'isFocused:is-focused', 'hasValue:has-value', 'isHovered:is-hovered'];

  assert.deepEqual(component.get('classNameBindings'), expectedValues, 'classNameBindings has proper values');

});

test('it has the proper attributeBindings values', function(assert) {
  assert.expect(1);
  let component = this.subject();
  let expectedValues = ['disabledAttr:isDisabled'];

  assert.deepEqual(component.get('attributeBindings'), expectedValues, 'attributeBindings has proper values');

});

test('tabindex returns -1 or 0 based on isDisabled', function(assert) {
  assert.expect(3);
  let component = this.subject();

  assert.notOk(component.get('isDisabled', 'isDisabled is default to start'));
  assert.equal(component.get('tabindex'), '0', 'tabIndex returns 0 when isDisabled is false');

  component.set('isDisabled', true);

  assert.equal(component.get('tabindex'), '-1', 'tabIndex returns -1 when isDisabled is true');

});

test('inputElementId returns the jQuery id for the component', function(assert) {
  assert.expect(1);
  let component = this.subject();
  let expectedResult = 'input-' + component.get('elementId');

  assert.equal(component.get('inputElementId'), expectedResult, 'inputElementId returns input- + the componentId');

});

test('setFocusIn sets the isFocused to true when the component isEnabled', function(assert) {
  assert.expect(2);
  let component = this.subject();

  assert.notOk(component.get('isFocused', 'isFocused is false to start'));
  component.setFocusIn();
  assert.ok(component.get('isFocused', 'isFocused is false to start'));
});

test('setIsTouched sets the isTouched to true when the component isEnabledAndIsNotTouched', function(assert) {
  assert.expect(2);
  let component = this.subject();

  assert.notOk(component.get('isTouched', 'isFocused is false to start'));
  component.setIsTouched();
  assert.ok(component.get('isTouched', 'isFocused is false to start'));
});

test('focusIn sets the isFocused to true when the component isEnabled', function(assert) {
  assert.expect(2);
  let component = this.subject();

  assert.notOk(component.get('isFocused', 'isFocused is false to start'));
  component.focusIn();
  assert.ok(component.get('isFocused', 'isFocused is false to start'));
});

test('focusOut calls setFocusStateOnBlur and setTouchedStateOnBlur', function(assert) {
  assert.expect(2);
  let component = this.subject();

  component.setFocusStateOnBlur = this.stub(component, 'setFocusStateOnBlur');
  component.setTouchedStateOnBlur = this.stub(component, 'setTouchedStateOnBlur');

  component.focusOut();

  assert.ok(component.setFocusStateOnBlur.calledOnce, 'setFocusStateOnBlur was called by focusOut');
  assert.ok(component.setTouchedStateOnBlur.calledOnce, 'setTouchedStateOnBlur was called by focusOut');
});

test('mouseEnter sets the isHovered to true', function(assert) {
  assert.expect(2);
  let component = this.subject();

  assert.notOk(component.get('isHovered', 'isHovered is false to start'));
  component.mouseEnter();
  assert.ok(component.get('isHovered', 'isHovered is true after mouseEnter is called'));
});

test('mouseLeave sets the isHovered to false', function(assert) {
  assert.expect(2);
  let component = this.subject();

  component.set('isHovered', true);
  assert.ok(component.get('isHovered', 'isHovered is true for setup'));
  component.mouseLeave();
  assert.notOk(component.get('isHovered', 'isHovered is false after mouseLeave is called'));
});

test('setFocusStateOnBlur sets the isFocused to false when inputValue is empty', function(assert) {
  assert.expect(3);
  let component = this.subject();
  component.set('isFocused', true);
  assert.ok(Ember.isEmpty(component.get('inputValue'), 'inputValue is [] for setup'));
  assert.ok(component.get('isFocused'), 'isFocused is false for setup');
  component.setFocusStateOnBlur();
  assert.notOk(component.get('isFocused'), 'isFocused is set to false when inputValue is empty and setFocusStateOnBlur is called');
});

test('setTouchedStateOnBlur sets the isTouched to true when isNotTouched is true', function(assert) {
  assert.expect(3);
  let component = this.subject();

  assert.ok(component.get('isNotTouched'), 'isNotTouched is true for setup');
  assert.notOk(component.get('isTouched'), 'isTouched is false for setup');
  component.setTouchedStateOnBlur();
  assert.ok(component.get('isTouched'), 'isTouched is set to true when isNotTouched is true and setTouchedStateOnBlur is called');
});
