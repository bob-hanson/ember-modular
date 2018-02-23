import Ember from 'ember';
import { moduleForComponent } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleForComponent('organization-detail-details-tab', 'Unit | Component | organization detail details tab init', {
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


moduleForComponent('organization-detail-details-tab', 'Unit | Component | organization detail details tab', {
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
  let expectedValues = 'organization-detail-details-tab';
  assert.ok(component.get('classNames').contains(expectedValues), 'classNames has proper values');

});

test('it has the proper classNameBindings values', function(assert) {
  assert.expect(1);
  let component = this.subject();
  let expectedValues = ['colSpan'];
  assert.deepEqual(component.get('classNameBindings'), expectedValues, 'classNameBindings has proper values');
});

test('it has the proper contactsCollection values', function(assert) {
  assert.expect(1);
  let component = this.subject();
  let expectedValues = [null, null, null];
  assert.deepEqual(component.get('contactsCollection'), expectedValues, 'contactsCollection has proper values');
});

test('rebindModel observer calls resetContactValues and setupContacts', function(assert) {
  assert.expect(2);
  let component = this.subject();

  component.resetContactValues = this.stub(component, 'resetContactValues');
  component.setupContacts = this.stub(component, 'setupContacts');

  component.set('currentOrganization', {});

  assert.ok(component.resetContactValues.calledOnce, 'resetContactValues fired once');
  assert.ok(component.setupContacts.calledOnce, 'setupContacts fired once');
});

test('resetContactValues resets the contactsCollection to [null, null]', function(assert) {
  assert.expect(1);
  let component = this.subject();
  let expectedValues = [null, null, null];
  component.resetContactValues();
  assert.deepEqual(component.get('contactsCollection'), expectedValues, 'contactsCollection is reset to [null, null]');
});

test('iterateContacts calls pushToContactsCollection for each contact', function(assert) {
  assert.expect(1);
  let component = this.subject();

  let contact1 = Ember.Object.create({ then: function(func) { func(); }});
  let contact2 = Ember.Object.create({ then: function(func) { func(); }});
  let contact3 = Ember.Object.create({ then: function(func) { func(); }});
  let contacts = Ember.A([contact1, contact2, contact3]);

  component.pushToContactsCollection = this.stub(component, 'pushToContactsCollection');
  component.iterateContacts(contacts);

  assert.ok(component.pushToContactsCollection.callCount === contacts.length, 'iterateContacts called for each contact');
});

test('pushToContactsCollection pushes contact to collection at correct index', function(assert) {
  assert.expect(3);
  let component = this.subject();

  let contact1 = Ember.Object.create({
    then: function(func) { func(); },
    definitionListData: {
      definitionTitle: 'Main Contact'
    }
  });
  let contact2 = Ember.Object.create({
    then: function(func) { func(); },
    definitionListData: {
      definitionTitle: 'Billing Contact'
    }
  });
  let contact3 = Ember.Object.create({
    then: function(func) { func(); },
    definitionListData: {
      definitionTitle: 'Technical Contact'
    }
  });

  component.pushToContactsCollection(contact1);
  component.pushToContactsCollection(contact2);
  component.pushToContactsCollection(contact3);

  assert.deepEqual(component.get('contactsCollection').objectAt(0), contact1.get('definitionListData'), 'Main Contact added to 0 index of contactsCollection');
  assert.deepEqual(component.get('contactsCollection').objectAt(1), contact2.get('definitionListData'), 'Billing Contact added to 1 index of contactsCollection');
  assert.deepEqual(component.get('contactsCollection').objectAt(2), contact3.get('definitionListData'), 'Technical Contact added to 1 index of contactsCollection');
});
