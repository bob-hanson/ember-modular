import BaseComponent from 'hyspa-base-components/components/base-component';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import layout from '../templates/components/new-audit-guideline';

export default BaseComponent.extend({
  layout,
  classNames: ['new-audit-guideline', 'list-column'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20,

  facilityAudit: service(),

  newReportParametersPath: alias('facilityAudit.newReportParametersPath'),
  newAuditScopePath: alias('facilityAudit.newAuditScopePath'),
  newScoringMethodPath: alias('facilityAudit.newScoringMethodPath'),

});
