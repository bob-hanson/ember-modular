import { computed, get } from '@ember/object';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/user-roles';

export default BaseComponent.extend({
  layout,
  hasRoles: true,
  emptyMessage: computed("", function () {
    return get(this, 'i18n').t('admin.users.emptyRolesMessage');
  })

});
