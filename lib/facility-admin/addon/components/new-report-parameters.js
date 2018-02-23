import ContentView from 'hyspa-common-components/components/content-view';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import layout from '../templates/components/new-report-parameters';

export default ContentView.extend({
  layout,
  classNames: ['new-report-parameters'],
  percentageWidth: 60,

  facilityAudit: service(),

  newScoringMethodPath: alias('facilityAudit.newScoringMethodPath')
});
