import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleForComponent('apps-menu', 'Unit | Component | apps menu', {
  needs: ['component:apps-menu', 'service:current-session', 'service:current-app', 'service:toast-message', 'service:repository', 'service:layout', 'service:external-links', 'service:i18n', 'service:filter-list', 'service:ripple', 'service:utilities'],
  unit: true
});

test('it toggles isViewingBubbleMenu property', function(assert) {
  assert.expect(2);
  let component = this.subject();

  assert.notOk(component.get('isViewingBubbleMenu'), 'isViewingBubbleMenu is false by default');
  component.toggleBubbleMenu();
  assert.ok(component.get('isViewingBubbleMenu'), 'isViewingBubbleMenu is set to true after toggleBubbleMenu is called');
});

test('triggerToggleMenu action calls toggleBubbleMenu', function(assert) {
  assert.expect(1);
  let component = this.subject();

  component.toggleBubbleMenu = this.stub(component, 'toggleBubbleMenu');

  component.send('triggerToggleMenu');
  assert.ok(component.toggleBubbleMenu.calledOnce, 'toggleBubbleMenu is called by triggerToggleMenu');

});
