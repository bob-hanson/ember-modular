import { observer, get, set } from '@ember/object';
import { equal, or, alias } from '@ember/object/computed';
import ListedNavigationItem from 'hyspa-common-components/components/listed-navigation-item';
import layout from '../templates/components/listed-user-item';

export default ListedNavigationItem.extend({
  layout,
  currentItem: alias('currentUser'),
  parentIsHovering: alias('parentComponent.isHovering'),
  isInEditUserView: equal('currentUser.currentSubstate', 'edit-user'),
  isInDetailView: equal('currentUser.currentSubstate', 'user-detail'),
  editIconIsActive: or('isHovering', 'isInEditUserView'),
  detailIconIsActive: or('isHovering', 'isInDetailView'),
  isHovering: false,
  editRoute: 'edit-system-user',
  viewRoute: 'system-user',

  watchParentHover: observer('parentComponent.isHovering', function() {
    set(this, 'isHovering', get(this, 'parentComponent.isHovering'));
  })

});
