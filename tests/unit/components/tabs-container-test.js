import Ember from 'ember';
import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleForComponent('tabs-container', 'Unit | Component | tabs container init', {
  needs: ['component:base-component', 'service:current-session', 'service:current-app', 'service:toast-message', 'service:repository', 'service:layout', 'service:external-links', 'service:i18n', 'service:filter-list', 'service:ripple', 'service:utilities'],
  unit: true
});

test('setupComponent init should call setupInstanceProperties', function(assert){
  assert.expect(1);
  this.subject({
    setupInstanceProperties: function() {
      assert.ok(true, 'resetContactValues fired');
    }
  });
});


moduleForComponent('tabs-container', 'Unit | Component | tabs container', {
  needs: ['component:base-component', 'service:current-session', 'service:current-app', 'service:toast-message', 'service:repository', 'service:layout', 'service:external-links', 'service:i18n', 'service:filter-list', 'service:ripple', 'service:utilities'],
  unit: true,
  beforeEach() {
    this.component = this.subject({ setupComponent: function() {} });
  }
});

test('it has the proper classNames values', function(assert) {
  assert.expect(1);
  let component = this.component;
  let expectedValues = 'tabs-container';
  assert.ok(component.get('classNames').contains(expectedValues), 'classNames has proper values');

});

test('it has the proper classNameBindings values', function(assert) {
  assert.expect(1);
  let component = this.component;
  let expectedValues = ['colSpan'];
  assert.deepEqual(component.get('classNameBindings'), expectedValues, 'classNameBindings has proper values');
});

test('setupInstanceProperties sets _tabs and _tabPanels to empty arrays', function(assert) {
  assert.expect(2);
  let component = this.component;
  let expectedValue = [];
  component.setupInstanceProperties();

  assert.deepEqual(component.get('_tabs'), expectedValue, '_tabs is set to empty array');
  assert.deepEqual(component.get('_tabPanels'), expectedValue, '_tabsPanels is set to empty array');
});

test('addToCollection adds tab or tab panel to collection', function(assert) {
  assert.expect(1);
  let component = this.component;

  component.set('_tabs', []);
  component.addToCollection('_tabs', {});

  let expectedLength = 1;

  assert.equal(component.get('_tabs').length, expectedLength, 'object added to collection');
});

test('getIndex returns the index of an object in its collection', function(assert) {
  assert.expect(1);
  let component = this.component;

  let object1 = { testProp: 'testValue1' };
  let object2 = { testProp: 'testValue2' };
  let object3 = { testProp: 'testValue3' };

  component.set('_tabs', [object1, object2, object3]);
  let expectedIndex = 1;
  let returnedIndex = component.getIndex('_tabs', object2);

  assert.equal(returnedIndex, expectedIndex, 'correct index returned');
});

test('setSelected calls setSelectedTab and setSelectedPanel', function(assert) {
  assert.expect(2);
  let component = this.component;

  component.setSelectedTab = this.stub(component, 'setSelectedTab');
  component.setSelectedPanel = this.stub(component, 'setSelectedPanel');

  component.setSelected();

  assert.ok(component.setSelectedTab.calledOnce, 'setSelectedTab called');
  assert.ok(component.setSelectedPanel.calledOnce, 'setSelectedPanel called');
});

test('setSelectedTab sets isActive for each tab object in collection to false, then sets it to true for new active tab', function(assert) {
  assert.expect(3);
  let component = this.component;

  let tab1 = Ember.Object.create( { isActive: true });
  let tab2 = Ember.Object.create( { isActive: true });
  let tab3 = Ember.Object.create( { isActive: true });
  let selectedIndex = 1;

  component.set('_tabs', [tab1, tab2, tab3]);

  component.setSelectedTab(selectedIndex);

  component.get('_tabs').forEach(function(tab, index) {
    if (index === selectedIndex) {
      assert.ok(tab.get('isActive'), 'isActive set to true on active tab');
    } else {
      assert.notOk(tab.get('isActive'), 'isActive set to false for all other tabs');
    }
  });
});

test('setSelectedTab sets isActive for each tab panel object in collection to false, then sets it to true for new active tab', function(assert) {
  assert.expect(3);
  let component = this.component;

  let tab1 = Ember.Object.create( { isActive: true });
  let tab2 = Ember.Object.create( { isActive: true });
  let tab3 = Ember.Object.create( { isActive: true });
  let selectedIndex = 1;

  component.set('_tabPanels', [tab1, tab2, tab3]);

  component.setSelectedPanel(selectedIndex);

  component.get('_tabPanels').forEach(function(tab, index) {
    if (index === selectedIndex) {
      assert.ok(tab.get('isActive'), 'isActive set to true on active tab panel');
    } else {
      assert.notOk(tab.get('isActive'), 'isActive set to false for all other tab panels');
    }
  });
});
