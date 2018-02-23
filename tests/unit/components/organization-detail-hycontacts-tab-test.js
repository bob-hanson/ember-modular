import Ember from 'ember';
import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleForComponent('organization-detail-hycontacts-tab', 'Unit | Component | organization detail hycontacts tab init', {
  needs: ['component:base-component', 'service:current-session', 'service:current-app', 'service:toast-message', 'service:repository', 'service:layout', 'service:external-links', 'service:i18n', 'service:filter-list', 'service:ripple', 'service:utilities'],
  unit: true
});

test('setupComponent init should call resetContactValues and setupContacts', function(assert){
  assert.expect(2);
  this.subject({
    resetContactValues: function() {
      assert.ok(true, 'resetContactValues fired');
    },
    setupContacts: function() {
      assert.ok(true, 'setupContacts fired');
    }
  });
});


moduleForComponent('organization-detail-hycontacts-tab', 'Unit | Component | organization detail hycontacts tab', {
  needs: ['component:base-component', 'service:current-session', 'service:current-app', 'service:toast-message', 'service:repository', 'service:layout', 'service:external-links', 'service:i18n', 'service:filter-list', 'service:ripple', 'service:utilities'],
  unit: true,
  beforeEach() {
    this.component = this.subject({
      resetContactValues: function() {},
      setupContacts: function() {}
    });
  }
});

test('it has the proper classNames values', function(assert) {
  assert.expect(1);
  let component = this.component;
  let expectedValues = 'organization-detail-hycontacts-tab';
  assert.ok(component.get('classNames').contains(expectedValues), 'classNames has proper values');

});

test('it has the proper classNameBindings values', function(assert) {
  assert.expect(1);
  let component = this.component;
  let expectedValues = ['colSpan'];
  assert.deepEqual(component.get('classNameBindings'), expectedValues, 'classNameBindings has proper values');
});

test('it has the proper contactsCollection values', function(assert) {
  assert.expect(1);
  let component = this.component;
  let expectedValues = null;
  assert.deepEqual(component.get('contactsCollection'), expectedValues, 'contactsCollection has proper values');
});

test('resetContactValues resets the contactsCollection to [null, null]', function(assert) {
  assert.expect(1);
  let component = this.component;
  let expectedValues = null;
  component.resetContactValues();
  assert.deepEqual(component.get('contactsCollection'), expectedValues, 'contactsCollection is reset to ');
});

test('pushToContactsCollection pushes contact to collection at correct index', function(assert) {
  assert.expect(2);
  let component = this.component;

  component.set('contactsCollection', []);

  let contact1 = Ember.Object.create({
    then: function(func) { func(); },
    definitionListData: {
      definitionTitle: 'Sales Rep'
    }
  });
  let contact2 = Ember.Object.create({
    then: function(func) { func(); },
    definitionListData: {
      definitionTitle: 'Account Manager'
    }
  });

  component.pushToContactsCollection(contact1);
  component.pushToContactsCollection(contact2);

  assert.deepEqual(component.get('contactsCollection').objectAt(0), contact1.get('definitionListData'), 'Sales Rep contact added to 0 index of contactsCollection');
  assert.deepEqual(component.get('contactsCollection').objectAt(1), contact2.get('definitionListData'), 'Account Manager contact added to 1 index of contactsCollection');

});
