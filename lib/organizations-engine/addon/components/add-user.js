import { computed, get } from '@ember/object';
import { equal } from '@ember/object/computed';
import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/add-user';

export default ContentView.extend({
  layout,
  currentOrganizations: null,
  currentClients: null,
  organizationSelectOptions: null,
  clientSelectOptions: null,
  currentScope: null,
  isOrganizationScope: equal('currentScope', 'organization'),

  primaryButtonText: computed("", function () {
    return get(this, 'i18n').t('admin.users.forms.primaryButtonText.create');
  })
});
