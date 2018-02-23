import ContentView from 'hyspa-common-components/components/content-view';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import layout from '../templates/components/key-finding-category-details';

export default ContentView.extend({
  layout,
  classNames: ['key-finding-category-detail-container'],
  percentageWidth: 40,
  hyspaModalService: service(),

  confirmDelete() {
    var confirmObject = {
      confirmHeader: 'Are you sure you want to delete this category?',
      status: 'warning',
      showIcon: true
    }
    get(this, 'hyspaModalService').confirm(confirmObject, this.onDeleteConfirm.bind(this));
  },

  onDeleteConfirm(response) {
    console.log(response);
  },

  actions: {
    triggerDelete() {
      this.confirmDelete();
    }
  }

});
