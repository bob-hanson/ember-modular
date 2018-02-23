import Ember from 'ember';
import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleForComponent('tab-button', 'Unit | Component | tab button init', {
  needs: ['component:base-component', 'service:current-session', 'service:current-app', 'service:toast-message', 'service:repository', 'service:layout', 'service:external-links', 'service:i18n', 'service:filter-list', 'service:ripple', 'service:utilities'],
  unit: true
});

test('setupComponent init should call registerTabItem', function(assert){
  assert.expect(1);
  this.subject({
    registerTabItem: function() {
      assert.ok(true, 'registerTabItem fired');
    }
  });
});


moduleForComponent('tab-button', 'Unit | Component | tab button', {
  needs: ['component:base-component', 'service:current-session', 'service:current-app', 'service:toast-message', 'service:repository', 'service:layout', 'service:external-links', 'service:i18n', 'service:filter-list', 'service:ripple', 'service:utilities'],
  unit: true,
  beforeEach() {
    var funcStub = function() {},
        tabsContainer = Ember.Object.create({ addToCollection: funcStub, getIndex: funcStub  }),
        parentView = Ember.Object.create({ tabsContainer: tabsContainer });
    this.component = this.subject({
      setupComponent: funcStub,
      parentView: parentView
    });
  }
});

test('it has the proper classNames values', function(assert) {
  assert.expect(1);
  let component = this.component;
  let expectedValues = 'tab-button';
  assert.ok(component.get('classNames').contains(expectedValues), 'classNames has proper values');

});

test('it has the proper classNameBindings values', function(assert) {
  assert.expect(1);
  let component = this.component;
  let expectedValues = ['isActive:is-active'];
  assert.deepEqual(component.get('classNameBindings'), expectedValues, 'classNameBindings has proper values');
});

test('it has the proper tagName value', function(assert) {
  assert.expect(1);
  let component = this.component;
  let expectedValue = 'li';
  assert.equal(component.get('tagName'), expectedValue, 'tagName has proper value');
});

test('it has the proper currentIndex value', function(assert) {
  assert.expect(1);
  let component = this.component;
  let expectedValue = null;
  assert.equal(component.get('currentIndex'), expectedValue, 'currentIndex has proper value');
});

test('registerTabItem should add the tab to the tab collection and set currentIndex to itself', function(assert) {
  assert.expect(3);
  let component = this.component;
  let expectedReturn = 'foo';

  component.tabsContainer = Ember.Object.create({
    addToCollection() {},
    getIndex() {}
  });

  component.tabsContainer.addToCollection = this.stub(component.tabsContainer, 'addToCollection');
  component.tabsContainer.getIndex = this.stub(component.tabsContainer, 'getIndex').returns('foo');

  component.registerTabItem();

  assert.ok(component.tabsContainer.addToCollection.calledWith('_tabs', component), 'addToCollection called once with proper parameters');
  assert.ok(component.tabsContainer.getIndex.calledWith('_tabs', component), 'getIndex called once with proper parameters');
  assert.equal(component.get('currentIndex'), expectedReturn, 'currentIndex is set to return of getIndex');
});

test('user click should call setSelected of the tabscontainer with the currentIndex', function(assert) {
  assert.expect(1);
  let component = this.component;
  component.set('currentIndex', 0);
  component.tabsContainer = Ember.Object.create({
    setSelected: function() {}
  });
  component.attrs = {
    clickAction: function() {}
  };
  component.ripple = { initRipple: function () {} };
  component.tabsContainer.setSelected = this.stub(component.tabsContainer, 'setSelected');

  component.click();

  assert.ok(component.get('tabsContainer').setSelected.calledWith(component.get('currentIndex')), 'setSelected from the tabs container called when user clicks on tab button');
});
