import { computed } from '@ember/object';
import { isPresent } from '@ember/utils';
import { scheduleOnce } from '@ember/runloop';
import FormView from 'hyspa-form-components/components/form-view';
import FormMixin from 'facility-admin/mixins/audit-scope-form';
import GeneralValidations from 'hyspa-form-components/mixins/general-validations';
import layout from 'facility-admin/templates/components/audit-scope-form';

export default FormView.extend(
  FormMixin,
  GeneralValidations, {
  layout,
  padding: '0,0,0,0',

  initComponent() {
    this._super();
    this.updateTouchables(false);
  },

  primaryButtonText: computed("", function () {
    return "Save";
  }),

  // setFormObject: observer('formProperties', function () {
  //   var formProperties = this.get('formProperties');
  //   if (isPresent(formProperties)) {
  //     this.bindFormProperties(formProperties);
  //   }
  // }),
  //
  // bindFormProperties(formProperties) {
  //   Object.keys(formProperties)
  //         .forEach(this.setFormPropertyKey.bind(this, formProperties));
  // },
  //
  // setFormPropertyKey(formProperties, key) {
  //   this.set(key, formProperties[key]);
  // },
  //
  updateTouchables(bool) {
    scheduleOnce('afterRender', this, this.setTouchableAttributes.bind(this, bool));
  },

  setTouchableAttributes(bool) {
    let attrs = this.get('touchables');
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
    this.attrs.formSubmit(fd);
  },

  actions: {

    triggerFormSubmit() {
      this.buildFormData();
    }

  }

});
