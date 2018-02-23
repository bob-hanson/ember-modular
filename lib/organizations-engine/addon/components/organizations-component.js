import { computed, get } from '@ember/object';
import { or, notEmpty } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import ListColumn from 'hyspa-common-components/components/list-column';
import layout from '../templates/components/organizations-component';

export default ListColumn.extend({
  layout,
  classNames: ['organizations'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20,

  hasOrganizations: notEmpty('currentOrganizations'),
  shouldDisplayAddIcon: or('isSuperOrganizationUser', 'hasOrganizations'),

  linkOrganization: computed('currentOrganizations', 'currentApp.currentOrganization', function () {
    var currentOrganization = get(this, 'currentApp.currentOrganization');
    if (isPresent(currentOrganization)) {
      return currentOrganization;
    } else {
      this.set('currentApp.currentOrganization', get(this, 'currentOrganizations').objectAt(0))
      return get(this, 'currentApp.currentOrganization');
    }
  })

});
