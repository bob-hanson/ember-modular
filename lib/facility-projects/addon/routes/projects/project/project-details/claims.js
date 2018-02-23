import FacilityEncountersBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default FacilityEncountersBaseRoute.extend({
  facilityAuditRepository: service(),

  uploadClaims(csv) {
    var currentProject = this.modelFor('projects.project'),
        projectId = get(currentProject, 'id');

    get(this, 'facilityAuditRepository').importProjectClaims(projectId, csv)
      .then(this.handleRecordsUploaded.bind(this));
  },

  handleRecordsUploaded(response) {
    console.log(response)
  },

  actions: {
    triggerUploadRecords(csv) {
      this.uploadClaims(csv);
    }
  }

});
