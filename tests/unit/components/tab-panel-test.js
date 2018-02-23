import Ember from 'ember';
import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleForComponent('tab-panel', 'Unit | Component | tab panel init', {
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


moduleForComponent('tab-panel', 'Unit | Component | tab panel', {
  needs: ['component:base-component', 'service:current-session', 'service:current-app', 'service:toast-message', 'service:repository', 'service:layout', 'service:external-links', 'service:i18n', 'service:filter-list', 'service:ripple', 'service:utilities'],
  unit: true,
  beforeEach() {
    var funcStub = function() {},
        tabsContainer = Ember.Object.create({ addToCollection: funcStub, getIndex: funcStub  }),
        parentView = Ember.Object.create({ tabsContainer: tabsContainer });
    this.component = this.subject({
      setupComponent: funcStub,
      parentView: tabsContainer
    });
  }
});

test('it has the proper classNames values', function(assert) {
  assert.expect(1);
  let component = this.component;
  let expectedValues = 'tab-panel';
  assert.ok(component.get('classNames').contains(expectedValues), 'classNames has proper values');

});

test('it has the proper classNameBindings values', function(assert) {
  assert.expect(1);
  let component = this.component;
  let expectedValues = ['colSpan'];
  assert.deepEqual(component.get('classNameBindings'), expectedValues, 'classNameBindings has proper values');
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

  assert.ok(component.tabsContainer.addToCollection.calledWith('_tabPanels', component), 'addToCollection called once with proper parameters');
  assert.ok(component.tabsContainer.getIndex.calledWith('_tabPanels', component), 'getIndex called once with proper parameters');
  assert.equal(component.get('currentIndex'), expectedReturn, 'currentIndex is set to return of getIndex');
});
