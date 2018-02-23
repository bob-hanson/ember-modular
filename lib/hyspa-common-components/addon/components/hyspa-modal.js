import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { get, computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import layout from '../templates/components/hyspa-modal';

export default BaseComponent.extend({
  layout,
  classNames: ['hyspa-modal'],
  classNameBindings: ['size', 'status'],
  hyspaModalService: service(),

  size: alias('hyspaModalService.size'),
  status: alias('hyspaModalService.status'),
  buttons: alias('hyspaModalService.buttons'),
  showIcon: alias('hyspaModalService.showIcon'),
  confirmMessage: alias('hyspaModalService.confirmMessage'),
  confirmHeader: alias('hyspaModalService.confirmHeader'),
  icon: computed('status', function() {
    switch (get(this, 'status')) {
      case 'general':
        return "non_urgent_outline";
      case 'error':
        return 'error_outline';
      case 'warning':
        return 'warning_outline';
      case 'info':
        return 'info_outline';
      case 'success':
        return 'success_outline';
    }
  }),

  handleConfirmResponse(response) {
    get(this, 'hyspaModalService').closeConfirmationModal(response);
  },

  actions: {
    triggerConfirmResponse(response) {
      this.handleConfirmResponse(response);
    }
  }

});
