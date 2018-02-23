import { computed, observer, get, set } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';
import { isPresent } from '@ember/utils';
import FormView from 'hyspa-form-components/components/form-view';
import OrganizationForm from './../mixins/organization-form';
import GeneralValidations from 'hyspa-form-components/mixins/general-validations';
import layout from '../templates/components/organization-form';

export default FormView.extend(
  OrganizationForm,
  GeneralValidations, {
  layout,
  moduleTip: computed("", function () {
    return get(this, 'i18n').t('admin.organizations.forms.moduleTip');
  }),

  bubbleTipMessage: computed("", function () {
    return get(this, 'i18n').t('admin.organizations.forms.bubbleTipMessage');
  }),

  initComponent() {
    this._super();
    this.updateTouchables(false);
    this.setupProducts();
  },

  setupProducts() {
    this.collectionOfOptions = [];
    set(this, 'selectedProducts', []);
  },

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
  },

  buildFormData() {
    let fd = new FormData();

    this.buildOrganization(fd);
    this.buildContacts(fd);
    this.buildProducts(fd);

    this.attrs.formSubmit(fd);
  },

  buildOrganization(fd) {
    fd.append('organization[name]', get(this, 'name'));
    fd.append('organization[city]', get(this, 'city'));
    fd.append('organization[address]', get(this, 'address'));
    fd.append('organization[address2]', get(this, 'address2'));
    fd.append('organization[zip_code]', get(this, 'zip'));
    fd.append('organization[state]', get(this, 'state'));
    fd.append('organization[enabled]', get(this, 'isEnabled'));
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
    fd.append('products[]', JSON.stringify({
      product_id: product.get('id'),
      name: product.get('name'),
      product_code: product.get('productCode')
    }));
  },

  collectionOfOptions: null,

  addOptionToCollection(option) {
    get(this, 'collectionOfOptions').pushObject(option);
  },

  removeOptionsFromCollection(option) {
    get(this, 'collectionOfOptions').removeObject(option);
  },

  actions: {

    triggerSelectProduct(selectedProduct) {
      this.updateProductSelect(selectedProduct);
    },

    triggerFormSubmit() {
      this.buildFormData();
    },

    triggerStateOptionSelected(selectedState) {
      this.updateStateValue(selectedState);
    },

    triggerMutliOptionAdd(selectedOption) {
      this.addOptionToCollection(selectedOption);
    },

    triggerMutliOptionRemoved(selectedOption) {
      this.removeOptionsFromCollection(selectedOption);
    },

    triggerColorPickerChange() {
      // console.log(pickerObject);
    },

    triggerShowInvalidFields() {
      this.updateTouchables(true);
    }

  }

});
