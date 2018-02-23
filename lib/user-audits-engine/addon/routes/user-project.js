import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import AuditNavigation from 'user-audits-engine/mixins/audit-box-routes';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend(
  AuditNavigation, {
  userAuditState: service(),

  model(params) {
    return this.modelFor('application')
               .findBy('id', params.projectSlug);
  },

  setupController(controller, currentProject) {
    this._super(controller, currentProject);
    controller.set('currentProject', currentProject);
  },

  activate() {
    get(this, 'userAuditState').set('isViewingFullProjectList', false);
  },

  deactivate() {
    get(this, 'userAuditState').set('isViewingFullProjectList', true);
  },

  transitionToAuditBox(column, encounter) {
    this.transitionTo(get(this, 'patientDataRoute'), encounter, this.modelFor('user-project'));
  },

  actions: {

    triggerEncounterStatusClicked(column, encounter) {
      this.transitionToAuditBox(column, encounter);
    },

    triggerCloseQA() {

    },

    triggerCloseSendReport() {

    },

    triggerClosePendingReport() {

    }

  }


});
