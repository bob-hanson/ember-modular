import ContentView from 'hyspa-common-components/components/content-view';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import layout from '../templates/components/facility-patient-data';

export default ContentView.extend({
  layout,
  classNames: ['patient-data', 'audit-content'],
  classNameBindings: ['colSpan'],
  facilityAudit: service(),

  checklistPath: alias('facilityAudit.checklistPath')

});
