import FacilityEncountersBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

export default FacilityEncountersBaseRoute.extend({
  chartLevelCommentsService: service(),

  model() {
    return get(this, 'chartLevelCommentsService').fetchChecklistResponses();
  },

  afterModel() {
    this.handleActionPanel();
  },

  handleActionPanel() {
    var actionPanelService = get(this, 'hyspaActionPanelService');
    actionPanelService.setActionComponent('chart-level-comments');
    actionPanelService.openActionPanel();
  },

  setupController(controller, currentChecklistResponses) {
    set(controller, 'currentChecklistResponses', currentChecklistResponses);
  }

});
