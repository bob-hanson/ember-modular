import { computed, get } from '@ember/object';
import { equal } from '@ember/object/computed';
import FormView from 'hyspa-form-components/components/form-view';
import layout from '../templates/components/persist-user';

export default FormView.extend({
  layout,
  currentOrganizations: null,
  currentClients: null,
  organizationSelectOptions: null,
  clientSelectOptions: null,
  currentScope: null,
  currentPath: null,
  isOrganizationScope: equal('currentScope', 'organization'),
  isEditPath: equal('currentPath', 'edit'),

  primaryButtonText: computed("", function () {
    if (get(this, 'isEditPath')) {
      return get(this, 'i18n').t('admin.users.forms.primaryButtonText.edit');
    } else {
      return get(this, 'i18n').t('admin.users.forms.primaryButtonText.create');
    }
  })
});
