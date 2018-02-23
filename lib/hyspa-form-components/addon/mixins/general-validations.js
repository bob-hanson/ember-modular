import Mixin from '@ember/object/mixin';
import { computed, get } from '@ember/object';

export default Mixin.create({

  firstNameValidation: computed("i18n", function () {
    return get(this, 'i18n').t('forms.field_validations.firstName');
  }),

  lastNameValidation: computed("i18n", function () {
    return get(this, 'i18n').t('forms.field_validations.lastName');
  }),

  nameValidation: computed("i18n", function () {
    return get(this, 'i18n').t('forms.field_validations.name');
  }),

  emailValidation: computed("i18n", function () {
    return get(this, 'i18n').t('forms.field_validations.email');
  }),

  addressValidation: computed("i18n", function () {
    return get(this, 'i18n').t('forms.field_validations.address');
  }),

  cityValidation: computed("i18n", function () {
    return get(this, 'i18n').t('forms.field_validations.city');
  }),

  stateValidation: computed("i18n", function () {
    return get(this, 'i18n').t('forms.field_validations.state');
  }),

  zipValidation: computed("i18n", function () {
    return get(this, 'i18n').t('forms.field_validations.zip');
  }),

  productValidation: computed("i18n", function () {
    return get(this, 'i18n').t('forms.field_validations.product');
  }),

  subdomainValidation: computed("i18n", function () {
    return get(this, 'i18n').t('forms.field_validations.subdomain');
  }),

  endDateValidation: computed("i18n", function () {
    return get(this, 'i18n').t('forms.field_validations.endDate');
  })

});
