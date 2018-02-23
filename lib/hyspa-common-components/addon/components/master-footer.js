import { alias } from '@ember/object/computed';
import MasterContent from './master-content';

export default MasterContent.extend({
  tagName: 'footer',
  classNames: ['master-footer secondary-background'],
  currentVertical: alias('currentApp.currentVertical')
});
