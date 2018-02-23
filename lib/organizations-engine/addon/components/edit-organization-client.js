import { computed, get, set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/edit-organization-client';

export default ContentView.extend({
  layout,
  formProperties: null,
  percentageWidth: 60,
  formTitle: "Edit Client",

  primaryButtonText: computed("", function () {
    return get(this, 'i18n').t('admin.clients.forms.primaryButtonText.edit');
  }),

  initComponent() {
    this._super();
    this.buildFormProperties();
  },

  buildFormProperties() {
    get(this, 'currentClient')
        .getAllRelationships()
        .then(this.setFormProperties.bind(this));
  },

  setFormProperties(relationships) {
    this.setFormTitle();
    set(this, 'formProperties', Object.assign(
      this.buildClientProperties(),
      this.buildClientProductProperties(relationships.clientProducts),
      this.buildMainContactProperties(relationships.contacts),
      this.buildBillingContactProperties(relationships.contacts),
      this.buildTechnicalContactProperties(relationships.contacts),
      this.buildSalesContactProperties(relationships.contacts),
      this.buildAccountContactProperties(relationships.contacts),
      this.buildProductProperties(relationships.products)
    ));
  },

  setFormTitle() {
    set(this, 'formTitle', `Edit ${get(this, 'currentClient.name')}`)
  },

  buildClientProperties() {
    var currentClient = get(this, 'currentClient');
    return {
      name: currentClient.get('name'),
      city: currentClient.get('city'),
      address: currentClient.get('address'),
      address2: currentClient.get('address2'),
      zip: currentClient.get('zipCode'),
      state: currentClient.get('state'),
      isEnabled: currentClient.get('isEnabled'),
      accountType: currentClient.get('accountType'),
      endDate: currentClient.get('endDate'),
      subdomain: currentClient.get('subdomain')
    };
  },

  buildClientProductProperties(clientProducts) {
    var tempObj = {};

    clientProducts.forEach(function (clientProduct) {
      let productKey = get(clientProduct, 'productKey');
      tempObj[`${productKey}AccessType`] = get(clientProduct, 'accessType');
      tempObj[`${productKey}TrialEndDate`] = get(clientProduct, 'trialEndDate');
    });
    return tempObj;
  },

  buildMainContactProperties(contacts) {
    var contact = contacts.findBy('contactType', 'main');
    return contact ? {
      mainContactId: contact.get('id'),
      mainContactName: contact.get('name'),
      mainContactEmail: contact.get('email'),
      mainContactPhone: contact.get('phone')
    } : null;
  },

  buildBillingContactProperties(contacts) {
    var contact = contacts.findBy('contactType', 'billing');
    return contact ? {
      billingContactId: contact.get('id'),
      billingContactName: contact.get('name'),
      billingContactEmail: contact.get('email'),
      billingContactPhone: contact.get('phone')
    } : null;
  },

  buildTechnicalContactProperties(contacts) {
    var contact = contacts.findBy('contactType', 'technical');
    return contact ? {
      techincalContactId: contact.get('id'),
      techincalContactName: contact.get('name'),
      techincalContactEmail: contact.get('email'),
      techincalContactPhone: contact.get('phone')
    } : null;
  },

  buildSalesContactProperties(contacts) {
    var contact = contacts.findBy('contactType', 'sales');
    return contact ? {
      healthicitySalesId: contact.get('id'),
      healthicitySalesName: contact.get('name'),
      healthicitySalesEmail: contact.get('email'),
      healthicitySalesPhone: contact.get('phone')
    } : null;
  },

  buildAccountContactProperties(contacts) {
    var contact = contacts.findBy('contactType', 'account');
    return contact ? {
      healthicityAccountManagerId: contact.get('id'),
      healthicityAccountManagerName: contact.get('name'),
      healthicityAccountManagerEmail: contact.get('email'),
      healthicityAccountManagerPhone: contact.get('phone')
    } : null;
  },

  buildProductProperties(products) {
    return {
      currentProducts: products
    }
  },

  actions: {

    triggerFormSubmitWithId(formData) {
      this.attrs.formSubmit(get(this, 'currentClient.id'), formData);
    }

  }

});
