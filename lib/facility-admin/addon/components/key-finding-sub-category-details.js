import ContentView from 'hyspa-common-components/components/content-view';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import layout from '../templates/components/key-finding-sub-category-details';

export default ContentView.extend({
  layout,
  classNames: ['key-finding-subcategory-detail-container'],
  percentageWidth: 40,
  hyspaModalService: service(),

  confirmDelete() {
    var confirmObject = {
      confirmHeader: 'Are you sure you want to delete this subcategory?',
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
