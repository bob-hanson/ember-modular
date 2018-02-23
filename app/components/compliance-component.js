import { computed, get } from '@ember/object';
import BaseComponent from './base-component';

export default BaseComponent.extend({

  clientRoot: computed("currentSession", function () {
    return get(this, 'currentSession.apiRoot') + 'clients/' + get(this, 'currentClient.id');
  }),

  dashboardUrl: computed("currentClient", function () {
    return get(this, 'clientRoot') + '/compliance_dashboard';
  }),

  attestationsUrl: computed("currentClient", function () {
    return get(this, 'clientRoot') + '/attestation_dashboard';
  }),

  auditsUrl: computed("currentClient", function () {
    return get(this, 'clientRoot') + '/audit_dashboard';
  }),

  incidentsUrl: computed("currentClient", function () {
    return get(this, 'clientRoot') + '/incident_dashboard';
  }),

  risksUrl: computed("currentClient", function () {
    return get(this, 'clientRoot') + '/risk_dashboard';
  }),

  toolboxUrl: computed("currentClient", function () {
    return get(this, 'clientRoot') + '/toolbox';
  }),

  trainingUrl: computed("currentClient", function () {
    return get(this, 'clientRoot') + '/courses';
  }),

  documentsUrl: computed("currentClient", function () {
    return get(this, 'clientRoot') + '/document_center';
  }),

  reportsUrl: computed("currentClient", function () {
    return get(this, 'clientRoot') + '/reports';
  })

});
