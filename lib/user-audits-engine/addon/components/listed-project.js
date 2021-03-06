import { alias } from '@ember/object/computed';
import ListedNavigationItem from 'hyspa-common-components/components/listed-navigation-item';
import layout from '../templates/components/listed-project';

export default ListedNavigationItem.extend({
  layout,
  currentItem: alias('currentProject'),
  displayNameWidth: 100
});
