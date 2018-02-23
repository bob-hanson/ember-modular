import ContentView from 'hyspa-common-components/components/content-view';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import layout from '../templates/components/new-scoring-method';

export default ContentView.extend({
  layout,
  classNames: ['new-scoring-method'],
  percentageWidth: 60,

  facilityAudit: service(),

  newAuditScopePath: alias('facilityAudit.newAuditScopePath')
});
