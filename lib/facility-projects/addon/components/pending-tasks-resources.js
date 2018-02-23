import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { equal } from '@ember/object/computed';
import { ifThenElseWithValues } from 'ember-macaroni';
import layout from '../templates/components/pending-tasks-resources';

export default BaseComponent.extend({
  layout,
  classNames: ['pending-tasks-resources'],
  classNameBindings: ['colSpan', 'isColumn:component-column'],
  facilityAudit: service(),
  percentageWidth: ifThenElseWithValues('facilityAudit.isViewingFullResourcesList', 80, 20),
  isColumn: equal('percentageWidth', 20)

});
