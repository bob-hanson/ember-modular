import { observer, get, set } from '@ember/object';
import { alias, bool } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/organization-detail-hycontacts-tab';

export default BaseComponent.extend({
  layout,
  classNames: ['organization-detail-hycontacts-tab'],
  classNameBindings: ['colSpan'],

  contactsCollection: null,

  modelContacts: alias('currentModel.contacts'),
  hasContacts: bool('modelContacts.isFulfilled'),

  initComponent() {
    this.resetContactValues();
    this.setupContacts();
  },

  rebindModel: observer('currentModel', function() {
    this.resetContactValues();
    this.setupContacts();
  }),

  resetContactValues() {
    set(this, 'contactsCollection', [null, null]);
  },

  setupContacts() {
    get(this, 'currentModel.contacts')
        .then(this.iterateContacts.bind(this));
  },

  iterateContacts(contacts) {
    contacts.forEach(this.pushToContactsCollection, this);
  },

  pushToContactsCollection(contact) {
    get(this, 'contactsCollection').pushObject(contact.get('definitionListData'));
  }

});
