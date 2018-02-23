import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import BaseComponent from './base-component';

export default BaseComponent.extend({

  amRoot: alias('currentSession.auditManagerBaseUrl'),

  superAdminUrl: computed("amRoot", function () {
    return get(this, 'amRoot') + '/audit_customers';
  }),

  superAdminSettingsUrl: computed("amRoot", function () {
    return get(this, 'amRoot') + '/audit_settings';
  }),

  adminUrl: computed("amRoot", function () {
    return get(this, 'amRoot') + '/audit_consulting_account';
  }),

  auditUrl: computed("amRoot", function () {
    return get(this, 'amRoot') + '/dashboard';
  }),

  recordsUrl: computed("amRoot", function () {
    return get(this, 'amRoot') + '/audit_upload/index/' + get(this, 'currentClient.id');
  }),

  reportingUrl: computed("amRoot", function () {
    return get(this, 'amRoot') + '/audit_reporting/index/' + get(this, 'currentClient.id');
  }),

  clientsUrl: computed("currentClient", function () {
    return get(this, 'amRoot') + '/audit_clients';
  }),

  educationUrl: computed("currentClient", function () {
    return get(this, 'amRoot') + '/audit_education';
  })

});
