import { alias } from '@ember/object/computed';
import MasterContent from './master-content';

export default MasterContent.extend({
  classNames: ['master-header nav-background-color primary-border-color'],
  currentVertical: alias('currentApp.currentVertical'),
  padding: '0,2,0,2'
});
