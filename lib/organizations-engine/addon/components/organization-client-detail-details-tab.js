import { observer, get, set } from '@ember/object';
import { alias, bool, notEmpty } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/organization-client-detail-details-tab';

export default BaseComponent.extend({
  layout,
	classNames: ['organization-detail-details-tab'],
  classNameBindings: ['colSpan'],

  contactsCollection: null,

  name: alias('currentClient.name'),
  address1: alias('currentClient.address'),
  address2: alias('currentClient.address2'),
  state: alias('currentClient.state'),
  city: alias('currentClient.city'),
  zip: alias('currentClient.zipCode'),
  clientContacts: alias('currentClient.contacts'),
  hasClientContacts: bool('clientContacts.isFulfilled'),

  hasAddress2: notEmpty('address2'),

  initComponent() {
    this.setDefaults();
    this.resetContactValues();
    this.setupContacts();
  },

  setDefaults() {
    this.contactsCollection = [null, null, null];
  },

  rebindModel: observer('currentClient', function() {
    this.resetContactValues();
    this.setupContacts();
  }),

  resetContactValues() {
    set(this, 'contactsCollection', [null, null, null]);
  },

  setupContacts() {
     get(this, 'currentClient.contacts')
        .then(this.iterateContacts.bind(this));
  },

  iterateContacts(contacts) {
    contacts.forEach(this.pushToContactsCollection, this);
  },

  pushToContactsCollection(contact) {
    const definitionListData = contact.get('definitionListData');
    switch (definitionListData.definitionTitle) {
      case "Main Contact":
        get(this, 'contactsCollection').replace(0, 1, [definitionListData]);
        break;
      case "Billing Contact":
        get(this, 'contactsCollection').replace(1, 1, [definitionListData]);
        break;
      case "Technical Contact":
        get(this, 'contactsCollection').replace(2, 1, [definitionListData]);
        break;
    }
  }
});
