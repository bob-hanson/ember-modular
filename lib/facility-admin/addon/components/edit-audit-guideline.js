import BaseComponent from 'hyspa-base-components/components/base-component';
import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import layout from '../templates/components/edit-audit-guideline';

export default BaseComponent.extend({
  layout,
  classNames: ['edit-audit-guideline'],
  classNameBindings: ['colSpan'],

  facilityAudit: service(),
  isViewingGuideLineNav: alias('facilityAudit.isViewingGuideLineNav'),

  editReportParametersPath: alias('facilityAudit.editReportParametersPath'),
  editAuditScopePath: alias('facilityAudit.editAuditScopePath'),
  editScoringMethodPath: alias('facilityAudit.editScoringMethodPath'),

  percentageWidth: computed('isViewingGuideLineNav', function() {
    return get(this, 'isViewingGuideLineNav') ? 40 : 60;
  })
});
