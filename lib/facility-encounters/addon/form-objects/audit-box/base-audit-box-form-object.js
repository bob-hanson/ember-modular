import EmberObject from '@ember/object';

export default EmberObject.extend({
  sourceModel: null,

  init() {
    this._super(...arguments);
    this.setFormProperties();
    this.setFormValues();
  },

  setFormProperties() {},
  setFormValues() {},

  clearFormValues() {
    this.setFormValues(true)
  },

  resetFormValues() {
    this.setFormValues();
  }

});
