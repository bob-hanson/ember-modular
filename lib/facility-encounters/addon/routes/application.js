import FacilityEncountersBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import FacilityEncountersEnums from 'facility-encounters/enums';
import { hash } from 'rsvp';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';


export default FacilityEncountersBaseRoute.extend({

  hyspaEnumsService: service(),

  afterModel(model, transition) {
    this.fetchChecklistData();
    this.setupEnums();
    this.checkForProjectsRoute(transition.targetName);
  },

  // Non-Blocking by not returning as model
  fetchChecklistData() {
    hash({
      facilityChecklistCategories: get(this, 'store').findAll('facility-checklist-category'),
      facilityChecklistSubCategories: get(this, 'store').findAll('facility-checklist-sub-category'),
      facilityChecklistTemplate: get(this, 'store').findAll('facility-checklist-template'),
      facilityKeyFindingTemplates: get(this, 'store').findAll('facility-key-finding-template')
    });
  },

  checkForProjectsRoute(targetName) {
    if (`${get(this, 'fullRouteName')}.index` === targetName) {
      this.transitionTo('projects');
    }
  },

  deactivate() {
    this._super(...arguments);
    this.destroyEnums();
  },

  setupEnums() {
    get(this, 'hyspaEnumsService').reopen({
      facilityEncounters: FacilityEncountersEnums
    });
  },

  destroyEnums() {
    get(this, 'hyspaEnumsService').reopen({
      facilityEncounters: null
    });
  }

});
