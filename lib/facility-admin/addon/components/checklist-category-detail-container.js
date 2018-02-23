import ContentView from 'hyspa-common-components/components/content-view';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import layout from '../templates/components/checklist-category-detail-container';

export default ContentView.extend({
  layout,
  classNames: ['checklist-category-detail-container'],
  percentageWidth: 40,
  hyspaModalService: service(),

  confirmDelete() {
    var confirmObject = {
      confirmHeader: 'Are you sure you want to delete this category?',
      status: 'warning',
      showIcon: true
    }
    get(this, 'hyspaModalService').confirm(confirmObject, this.onDelteConfirm.bind(this));
  },

  onDelteConfirm(response) {
    console.log(response);
  },

  actions: {
    triggerDelete() {
      this.confirmDelete();
    }
  }

});
