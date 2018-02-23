import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { ifThenElseWithValues } from 'ember-macaroni';
import layout from '../templates/components/checklist-template-list-views';

export default BaseComponent.extend({
  layout,
  classNames: ['checklist-template-list-views'],
  classNameBindings: ['colSpan', 'isViewingChecklistTemplate:list-column'],
  facilityAudit: service(),
  isViewingChecklistTemplate: alias('facilityAudit.isViewingChecklistTemplate'),
  percentageWidth: ifThenElseWithValues('isViewingChecklistCategory', 20, 60)

});
