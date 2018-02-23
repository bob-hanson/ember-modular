import { set, get } from '@ember/object';
import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { inject as service } from '@ember/service';

export default FacilityBaseRoute.extend({
  facilityAuditRepository: service(),

  model() {
    return get(this, 'store')
          .query('facility-audit', { facility_project_id: this.modelFor('projects.inpatient.project').get('id') });
  },

  setupController(controller, currentCoderProjects) {
    this._super(...arguments);
    set(controller, 'currentCoderProjects', currentCoderProjects);
  },

  sendReportRequest(formData) {
    get(this, 'facilityAuditRepository')
      .sendReportRequest(formData);
  },

  processTableOptions(table, options) {
    var fd = new FormData(),
        selectedItems = get(table, 'selectedRows').map(row => row.content.id);

    fd.append('project_id', this.modelFor('projects.inpatient.project').get('id'));
    fd.append('coder_ids[]', selectedItems);
    fd.append('report_output_type', 'xls'), // XLS for now on all reports. Per Steph MVP
    fd.append('requested_report', options.reportType);
    this.sendReportRequest(fd);
  },

  actions: {

    triggerGenerateReport(table, options) {
      this.processTableOptions(table.table, options);
    }

  }

});
