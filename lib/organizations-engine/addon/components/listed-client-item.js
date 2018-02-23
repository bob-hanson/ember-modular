import { computed, observer, get, set } from '@ember/object';
import { equal, or, alias } from '@ember/object/computed';
import ListedNavigationItem from 'hyspa-common-components/components/listed-navigation-item';
import layout from '../templates/components/listed-client-item';

export default ListedNavigationItem.extend({
  layout,
  classNameBindings: ['notificationStatus'],
  currentItem: alias('currentClient'),
  parentIsHovering: alias('parentComponent.isHovering'),
  isInUsersView: equal('currentClient.currentSubstate', 'users'),
  isInDetailsView: equal('currentClient.currentSubstate', 'details'),
  userIconIsActive: or('isHovering', 'isInUsersView'),
  detailsIconIsActive: or('isHovering', 'isInDetailsView'),
  isHovering: false,
  defaultTruncatedWidth: 54,

  notificationMessage: "Database creation in process",

  notificationStatus: computed('currentClient.creationStatus', function () {
    switch(get(this, 'currentClient.creationStatus')) {
      case 'success':
        set(this, 'notificationMessage', "Database created");
        return 'check_circle';
      case 'pending':
        set(this, 'notificationMessage', "Database creation pending");
        return 'warning';
      case 'failed':
        set(this, 'notificationMessage', "Database creation failed");
        return 'error';
    }
  }),

  watchParentHover: observer('parentComponent.isHovering', function() {
    set(this, 'isHovering', get(this, 'parentComponent.isHovering'));
  })
});
