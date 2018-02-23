import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { equal } from '@ember/object/computed';
import { ifThenElseWithValues } from 'ember-macaroni';
import layout from '../templates/components/manage-audits';

export default BaseComponent.extend({
  layout,
  classNames: ['manage-audits'],
  classNameBindings: ['colSpan', 'isColumn:component-column'],
  facilityAudit: service(),
  percentageWidth: ifThenElseWithValues('facilityAudit.isViewingFullManageAuditList', 100, 20),
  isColumn: equal('percentageWidth', 20)

});
