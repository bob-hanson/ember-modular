import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  // Stubbed for now.
  model() {
    return this.modelFor('audit');
  },

  setupController(controller, currentAudit) {
    this._super(controller, currentAudit);
    controller.set('formObject', {});
    this.resetCurrentBreadcrumbs();
  }

});
