import { observer, get, set } from '@ember/object';
import { equal, or, alias } from '@ember/object/computed';
import ListedNavigationItem from 'hyspa-common-components/components/listed-navigation-item';
import layout from '../templates/components/listed-organization-item';

export default ListedNavigationItem.extend({
  layout,
  currentItem: alias('currentOrganization'),
  parentIsHovering: alias('parentComponent.isHovering'),
  isInClientsView: equal('currentOrganization.currentSubstate', 'clients'),
  isInDetailsView: equal('currentOrganization.currentSubstate', 'details'),
  isInUsersView: equal('currentOrganization.currentSubstate', 'users'),
  clientIconIsActive: or('isHovering', 'isInClientsView'),
  detailsIconIsActive: or('isHovering', 'isInDetailsView'),
  usersIconIsActive: or('isHovering','isInUsersView'),
  defaultTruncatedWidth:54,
  isHovering: false,

  watchParentHover: observer('parentComponent.isHovering', function() {
    set(this, 'isHovering', get(this, 'parentComponent.isHovering'));
  })

});
