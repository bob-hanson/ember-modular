import ContentView from 'hyspa-common-components/components/content-view';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import layout from '../templates/components/new-audit-scope';

export default ContentView.extend({
  layout,
  classNames: ['new-audit-scope'],
  percentageWidth: 60,

  facilityAudit: service(),

  newReportParametersPath: alias('facilityAudit.newReportParametersPath')
});
