import { observer, get, set } from '@ember/object';
import { alias, bool, notEmpty } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/organization-detail-details-tab';

export default BaseComponent.extend({
  layout,
  classNames: ['organization-detail-details-tab'],
  classNameBindings: ['colSpan'],

  name: alias('currentOrganization.name'),
  address: alias('currentOrganization.address'),
  address2: alias('currentOrganization.address2'),
  state: alias('currentOrganization.state'),
  city: alias('currentOrganization.city'),
  zipCode: alias('currentOrganization.zipCode'),
  contacts: alias('currentOrganization.contacts'),
  hasContacts: bool('contacts.isFulfilled'),

  hasAddress2: notEmpty('address2'),

  initComponent() {
    this.resetContactValues();
    this.setupContacts();
    this.contactsCollection = [null, null, null];
  },

  rebindModel: observer('currentOrganization', function() {
    this.resetContactValues();
    this.setupContacts();
  }),

  resetContactValues() {
    set(this, 'contactsCollection', [null, null, null]);
  },

  setupContacts() {
    get(this, 'currentOrganization.contacts')
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
