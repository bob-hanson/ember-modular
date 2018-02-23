import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  setupController(controller, currentAudit) {
    this._super(controller, currentAudit);
  },

  buildFormData() {
    // console.log('form submit');
  },

  previewForm() {
    // console.log('form preview');
  },

  cancelForm() {
    // console.log('form cancel');
  },

  actions: {

    triggerFormSubmit() {
      this.buildFormData();
    },

    triggerFormPreview() {
      this.previewForm();
    },

    triggerFormCancel() {
      this.cancelForm();
    }

  }
});
