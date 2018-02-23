import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  setupController(controller, currentAudit) {
    this._super(controller, currentAudit);
    // this.resetCurrentBreadcrumbs();
  },

  actions: {

    // didTransition() {
    //   this.get('currentApp').set('shouldDisplayNav', false);
    //   this.addBreadcrumb('new-audit', "New Audit");
    // },
    //
    // willTransition() {
    //   this.get('currentApp').set('shouldDisplayNav', true);
    //   this.removeBreadcrumb('new-audit');
    // }

  }
});
