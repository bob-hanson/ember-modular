import EmberObject, { computed, observer, get, set } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import { isPresent } from '@ember/utils';
import FormView from 'hyspa-form-components/components/form-view';
import ClientForm from './../mixins/client-form';
import GeneralValidations from 'hyspa-form-components/mixins/general-validations';
import layout from '../templates/components/client-form';

export default FormView.extend(
  ClientForm,
  GeneralValidations, {
  layout,
  auditManagerCustomerTypeOptions: null,
  clientEmrSelectOptions: null,
  auditeeTypeSelectOptions: null,
  hasComplianceManager: false,
  hasAuditManager: false,
  // hasFacilityManager: false,
  // hasProviderAnalytics: false,
  // hasLearningCenter: false,

  initComponent() {
    this.updateTouchables(false);
    this.createAccountTypeOptions();
    this.createAuditCustomerTypeOptions();
    // this.createAuditEmrOptions();
    // this.createAuditAuditeeTypeOptions();
    this.setupProducts();
  },

  setupProducts() {
    this.collectionOfOptions = [];
    set(this, 'selectedProducts', []);
  },

  setupEmrs() {
    set(this, 'selectedEmrs', []);
  },

  setupClientTypes() {
    set(this, 'selectedClientTypes', []);
  },

  createAccountTypeOptions() {
    set(this, 'cmAccountTypeOptions', this.accessTypeOptions());
    set(this, 'amAccountTypeOptions', this.accessTypeOptions());
    set(this, 'fmAccountTypeOptions', this.accessTypeOptions());
  },

  accessTypeOptions() {
    return [
      EmberObject.create({ optionName: 'Standard', optionValue: 'standard'}),
      EmberObject.create({ optionName: 'Demo', optionValue: 'demo' }),
      EmberObject.create({ optionName: 'Trial', optionValue: 'trial' })
    ]
  },

  createAuditCustomerTypeOptions() {
    set(this, 'auditManagerCustomerTypeOptions', [
      EmberObject.create({ optionName: 'Enterprise', optionValue: 'enterprise', isSelected: false }),
      EmberObject.create({ optionName: 'Consulting', optionValue: 'consulting', isSelected: false })
    ]);
  },

  createAuditEmrOptions() {
    set(this, 'clientEmrSelectOptions', [
      EmberObject.create({ optionName: 'Athena', optionValue: 'athena', isSelected: false })
    ]);
  },

  createAuditAuditeeTypeOptions() {
    set(this, 'auditeeTypeSelectOptions', [
      EmberObject.create({ optionName: 'Provider', optionValue: 'audit_provider', isSelected: false }),
      EmberObject.create({ optionName: 'Coder', optionValue: 'audit_coder', isSelected: false }),
      EmberObject.create({ optionName: 'Facility', optionValue: 'audit_facility', isSelected: false })
    ]);
  },

  moduleTip: computed("", function () {
    return get(this, 'i18n').t('admin.clients.forms.moduleTip');
  }),

  bubbleTipMessage: computed("", function () {
    return get(this, 'i18n').t('admin.clients.forms.bubbleTipMessage');
  }),

  setFormObject: observer('formProperties', function () {
    var formProperties = get(this, 'formProperties');
    if (isPresent(formProperties)) {
      this.bindFormProperties(formProperties);
    }
  }),

  bindFormProperties(formProperties) {
    Object.keys(formProperties)
          .forEach(this.setFormPropertyKey.bind(this, formProperties));
  },

  setFormPropertyKey(formProperties, key) {
    set(this, key, formProperties[key]);
  },

  updateStateValue(selectedState) {
    scheduleOnce('afterRender', this, this.setSelectedState.bind(this, selectedState));
  },

  setSelectedState(selectedState) {
    set(this, 'state', selectedState.optionValue);
  },

  updateTouchables(bool) {
    scheduleOnce('afterRender', this, this.setTouchableAttributes.bind(this, bool));
  },

  setTouchableAttributes(bool) {
    let attrs = get(this, 'touchables');
    if (isPresent(attrs)) {
      let touchableProperties = {};
      attrs.forEach(function(attr) {
        touchableProperties[attr] = bool;
      });
      this.setProperties(touchableProperties);
    }
  },

  buildFormData() {
    let fd = new FormData();

    this.buildClient(fd);
    this.buildContacts(fd);
    this.buildProducts(fd);

    // this.debugFormData(fd);
    // this.buildProductOptions(fd);
    this.attrs.formSubmit(fd);
  },

  // debugFormData(fd) {
  //   var pair;
  //   for (pair of fd.entries()) {
  //     console.log(pair[0]+ ', ' + pair[1]);
  //   }
  // },

  buildClient(fd) {
    fd.append('client[name]', get(this, 'name'));
    fd.append('client[city]', get(this, 'city'));
    fd.append('client[address]', get(this, 'address'));
    if (isPresent(get(this, 'address2'))) {
      fd.append('client[address2]', get(this, 'address2'));
    }
    fd.append('client[zip_code]', get(this, 'zip'));
    fd.append('client[state]', get(this, 'state'));
    fd.append('client[enabled]', get(this, 'isEnabled'));
    fd.append('client[subdomain]', get(this, 'subdomain'));
    if (isPresent(get(this, 'currentOrganization'))) {
      fd.append('client[organization_id]', get(this, 'currentOrganization.id'));
    }
  },

  buildContacts(fd) {
    if (get(this, 'mainContactName')) {
      fd.append('contacts[]', JSON.stringify({
        id: get(this, 'mainContactId'),
        name: get(this, 'mainContactName'),
        email: get(this, 'mainContactEmail'),
        phone: get(this, 'mainContactPhone'),
        contact_type: 'main'
      }));
    }

    if (get(this, 'billingContactName')) {
      fd.append('contacts[]', JSON.stringify({
        id: get(this, 'billingContactId'),
        name: get(this, 'billingContactName'),
        email: get(this, 'billingContactEmail'),
        phone: get(this, 'billingContactPhone'),
        contact_type: 'billing'
      }));
    }

    if (get(this, 'techincalContactName')) {
      fd.append('contacts[]', JSON.stringify({
        id: get(this, 'techincalContactId'),
        name: get(this, 'techincalContactName'),
        email: get(this, 'techincalContactEmail'),
        phone: get(this, 'techincalContactPhone'),
        contact_type: 'technical'
      }));
    }

    if (get(this, 'healthicitySalesName')) {
      fd.append('contacts[]', JSON.stringify({
        id: get(this, 'healthicitySalesId'),
        name: get(this, 'healthicitySalesName'),
        email: get(this, 'healthicitySalesEmail'),
        phone: get(this, 'healthicitySalesPhone'),
        contact_type: 'sales'
      }));
    }

    if (get(this, 'healthicityAccountManagerName')) {
      fd.append('contacts[]', JSON.stringify({
        id: get(this, 'healthicityAccountManagerId'),
        name: get(this, 'healthicityAccountManagerName'),
        email: get(this, 'healthicityAccountManagerEmail'),
        phone: get(this, 'healthicityAccountManagerPhone'),
        contact_type: 'account'
      }));
    }

  },

  buildProducts(fd) {
    get(this, 'selectedProducts')
        .forEach(this.buildProduct.bind(this, fd));
  },

  buildProduct(fd, product) {
    fd.append('products[]', JSON.stringify(this.setAccessType(product)));
  },

  setAccessType(product) {
    switch(product.get('productCode')) {
      case 'AuditManager':
      return {
        product_id: product.get('id'),
        access_type: get(this, 'amAccessType'),
        trial_end_date: get(this, 'amTrialEndDate')
      };
      case 'ComplianceManager':
      return {
        product_id: product.get('id'),
        access_type: get(this, 'cmAccessType'),
        trial_end_date: get(this, 'cmTrialEndDate')
      };
      case 'FacilityManager':
      return {
        product_id: product.get('id'),
        access_type: get(this, 'fmAccessType'),
        trial_end_date: get(this, 'fmTrialEndDate')
      };
      case 'ProviderAnalytics':
      return {
        product_id: product.get('id'),
        access_type: get(this, 'paAccessType'),
        trial_end_date: get(this, 'paTrialEndDate')
      };
      case 'LearningCenter':
      return {
        product_id: product.get('id'),
        access_type: get(this, 'lcAccessType'),
        trial_end_date: get(this, 'lcTrialEndDate')
      };
    }
  },

  buildProductOptions(fd) {
    this.buildAuditManagerOptions(fd);
    this.buildComplianceManagerOptions(fd);
  },

  buildComplianceManagerOptions(fd) {
    if (get(this, 'hasComplianceManager')) {
      fd.append('compliance_manager_options[]', JSON.stringify({
        deliver_emails: get(this, 'wantsDeliverEmails')
      }));
    }
  },

  buildAuditManagerOptions(fd) {
    var licenses = get(this, 'auditManagerUserLicenses');
    if (get(this, 'hasAuditManager')) {
      fd.append('audit_manager_options[]', JSON.stringify({
        audit_customer_type: get(this, 'auditManagerCustomerType'),
        audit_manager_user_licenses: isPresent(licenses) ? licenses : 1
      }));
      this.buildEmrs(fd);
      this.buildClientTypes(fd);
    }
  },

  buildEmrs(fd) {
    var emrs = get(this, 'auditManagerEmrs');
    if (isPresent(emrs)) {
      emrs.forEach(this.buildEmr.bind(this, fd));
    }
  },

  buildEmr(fd, emr) {
    fd.append('audit_emrs[]', JSON.stringify({
      emr: emr.get('optionValue')
    }));
  },

  buildClientTypes(fd) {
    get(this, 'auditManagerAuditeeTypes')
        .forEach(this.buildAuditeeType.bind(this, fd));
  },

  buildAuditeeType(fd, auditeeType) {
    fd.append('audit_auditee_types[]', JSON.stringify({
      audit_auditee_type: auditeeType.get('optionValue')
    }));
  },

  updateProductSelect(selectedProduct) {
    selectedProduct.toggleProperty('isSelected');
    this.updateSelectedProductsArray(selectedProduct);
  },

  updateSelectedProductsArray(selectedProduct) {
    var selectedProducts = get(this, 'selectedProducts');
    if (selectedProduct.get('isSelected')) {
      selectedProducts.pushObject(selectedProduct);
    } else {
      selectedProducts.removeObject(selectedProduct);
    }
    this.toggleSelectedProductProperty(selectedProduct);
  },

  updateEmrSelect(selectedEmr) {
    selectedEmr.toggleProperty('isSelected');
    this.updateSelectedEmrArray(selectedEmr);
  },

  updateSelectedEmrArray(selectedEmr) {
    var auditManagerEmrs = get(this, 'auditManagerEmrs');
    if (selectedEmr.get('isSelected')) {
      auditManagerEmrs.pushObject(selectedEmr);
    } else {
      auditManagerEmrs.removeObject(selectedEmr);
    }
  },

  updateClientTypeSelect(selectedClientType) {
    selectedClientType.toggleProperty('isSelected');
    this.updateSelectedClientTypesArray(selectedClientType);
  },

  updateSelectedClientTypesArray(selectedClientType) {
    var auditManagerAuditeeTypes = get(this, 'auditManagerAuditeeTypes');
    if (selectedClientType.get('isSelected')) {
      auditManagerAuditeeTypes.pushObject(selectedClientType);
    } else {
      auditManagerAuditeeTypes.removeObject(selectedClientType);
    }
  },

  toggleSelectedProductProperty(selectedProduct) {
    switch (selectedProduct.get('productCode')) {
      case 'ComplianceManager':
        set(this, 'hasComplianceManager', selectedProduct.get('isSelected'));
        break;
      case 'AuditManager':
        set(this, 'hasAuditManager', selectedProduct.get('isSelected'));
        break;
      // case 'FacilityManager':
      //   set(this, 'hasFacilityManager', selectedProduct.get('isSelected'));
      //   this.toggleProductAccess('fm', selectedProduct);
      //   break;
      // case 'ProviderAnalytics':
      //   set(this, 'hasProviderAnalytics', selectedProduct.get('isSelected'));
      //   this.toggleProductAccess('pa', selectedProduct);
      //   break;
      // case 'LearningCenter':
      //   set(this, 'hasLearningCenter', selectedProduct.get('isSelected'));
      //   this.toggleProductAccess('lc', selectedProduct);
      //   break;
    }
  },

  actions: {

    triggerEmrSelected(selectedEmr) {
      this.updateEmrSelect(selectedEmr);
    },

    triggerEmrRemoved(selectedEmr) {
      this.updateEmrSelect(selectedEmr);
    },

    triggerClientTypeSelected(selectedClientType) {
      this.updateClientTypeSelect(selectedClientType);
    },

    triggerClientTypeRemoved(selectedClientType) {
      this.updateClientTypeSelect(selectedClientType);
    },

    triggerSelectProduct(selectedProduct) {
      this.updateProductSelect(selectedProduct);
    },

    triggerAuditAccountTypeSelect(selectedValue) {
      set(this, 'auditManagerCustomerType', selectedValue);
    },

    triggerFormSubmit() {
      this.buildFormData();
    },

    triggerStateOptionSelected(selectedState) {
      this.updateStateValue(selectedState);
    },

    triggerShowInvalidFields() {
      this.updateTouchables(true);
    }

  }

});
