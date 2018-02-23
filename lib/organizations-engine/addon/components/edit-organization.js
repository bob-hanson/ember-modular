import { computed, get, set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/edit-organization';

export default ContentView.extend({
  layout,
  selectedProducts: null,
  formProperties: null,
  percentageWidth: 80,
  formTitle: "Edit Organization",

  primaryButtonText: computed("", function () {
    return get(this, 'i18n').t('admin.organizations.forms.primaryButtonText.edit');
  }),

  initComponent() {
    this.formProperties = {};
    this.buildFormProperties();
  },

  buildFormProperties() {
    get(this, 'currentOrganization')
        .getAllRelationships()
        .then(this.setFormProperties.bind(this));
  },

  setFormProperties(relationships) {
    this.setFormTitle();
    set(this, 'formProperties', Object.assign(
      this.buildOrganizationProperties(),
      this.buildMainContactProperties(relationships.contacts),
      this.buildBillingContactProperties(relationships.contacts),
      this.buildTechnicalContactProperties(relationships.contacts),
      this.buildSalesContactProperties(relationships.contacts),
      this.buildAccountContactProperties(relationships.contacts),
      this.buildProductProperties(relationships.products)
    ));
  },

  setFormTitle() {
    set(this, 'formTitle', `Edit ${get(this, 'currentOrganization.name')}`)
  },

  buildOrganizationProperties() {
    var currentOrganization = get(this, 'currentOrganization');
    return {
      name: currentOrganization.get('name'),
      city: currentOrganization.get('city'),
      address: currentOrganization.get('address'),
      address2: currentOrganization.get('address2'),
      zip: currentOrganization.get('zipCode'),
      state: currentOrganization.get('state'),
      isEnabled: currentOrganization.get('isEnabled'),
    };
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
      this.attrs.formSubmit(get(this, 'currentOrganization.id'), formData);
    }

  }

});
