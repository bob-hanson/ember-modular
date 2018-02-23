import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';
import FacilityAdminHelpDictionary from 'facility-admin/help-dictionary';
// import { get } from '@ember/object';
// import DS from 'ember-data';

export default FacilityBaseRoute.extend({

  activate() {
    set(this, 'currentApp.engineScope', 'facility-admin');
  },

  setupController() {
    this._super(...arguments);
    this.loadHelpDictionary();
  },

  loadHelpDictionary() {
    get(this, 'hyspaActionPanelService').loadIntoHelpDictionary('facility-admin', FacilityAdminHelpDictionary);
  }
});
