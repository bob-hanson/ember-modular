import ContentView from 'hyspa-common-components/components/content-view';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import layout from '../templates/components/facility-checklist';

export default ContentView.extend({
  layout,
  classNames: ['facility-checklist', 'audit-content'],
  classNameBindings: ['colSpan'],

  facilityAudit: service(),
  codesPath: alias('facilityAudit.codesPath')

});
