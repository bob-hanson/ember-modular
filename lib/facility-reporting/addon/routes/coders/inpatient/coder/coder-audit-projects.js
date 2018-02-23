import { get, set } from '@ember/object';
import FacilityEncountersBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { inject as service } from '@ember/service';

export default FacilityEncountersBaseRoute.extend({
  facilityAuditRepository: service(),

  model() {
    return this.modelFor('coders.inpatient.coder');
  },

  setupController(controller, currentCoder) {
    this._super(...arguments);
    set(controller, 'currentCoder', currentCoder);
    set(controller, 'currentProjects', this.modelFor('coders.inpatient'));
  },

  sendReportRequest(formData) {
    get(this, 'facilityAuditRepository')
      .sendReportRequest(formData);
  },

  processTableOptions(table, options) {
    var fd = new FormData(),
      selectedItems = get(table, 'selectedRows').map(row => row.content.id);

    fd.append('coder_id', this.modelFor('coders.inpatient.coder').get('id'));
    fd.append('project_ids[]', selectedItems);
    fd.append('report_output_type', options.reportOutputType),
    fd.append('requested_report', 'coder detailed');
    this.sendReportRequest(fd);
  },

  actions: {

    triggerGenerateReport(table, options) {
      this.processTableOptions(table.table, options);
    }

  }

});
