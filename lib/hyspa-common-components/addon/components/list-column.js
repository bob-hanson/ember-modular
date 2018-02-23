import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/list-column';

export default BaseComponent.extend({
  layout,
  resizeService: service(),
  classNames: ['list-column'],
  classNameBindings: ['colSpan'],

  initComponent() {
    this.resizeColumn();
  },

  resizeColumn() {
    get(this, 'resizeService').resizeApp();
  }

});
