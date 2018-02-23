import { computed, get } from '@ember/object';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/component-column';

export default BaseComponent.extend({
  layout,
  classNames: ['component-container', 'component-column'],
  classNameBindings: ['colSpan', 'colType'],
  columnType: null,
  isNavigationColumn: computed.equal('columnType', 'navigation'),

  initComponent() {
    this.resizeColumn();
  },

  resizeColumn() {
    get(this, 'resizeService').resizeApp();
  },


  colType: computed('columnType', function () {
    if (get(this, 'columnType')) {
      return get(this, 'columnType');
    }
  })
});
