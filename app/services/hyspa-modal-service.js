import Service from '@ember/service';
import { get, set, setProperties } from '@ember/object';

export default Service.extend({
  confirmHeader: null,
  confirmMessage: null,
  status: null,
  showIcon: false,
  buttons: null,
  confirmCallbackFunction: null,

  init() {
    this._super();
    this.setupDefaults();
  },

  setupDefaults() {
    setProperties(this, {
      status: 'general',
      showIcon: false,
      size: 'medium',
      buttons: [
        {
          "text": "OK",
          "value": true
        },
        {
          "text": "Cancel",
          "value": false
        }
      ],
      confirmCallbackFunction: null
    });
  },

  confirm(confirmObject, callbackFunction) {
    if (typeof confirmObject === 'string') {
      set(this, 'confirmHeader', confirmObject);
    } else {
      setProperties(this, confirmObject);
    }
    set(this, 'confirmCallbackFunction', callbackFunction);
    this.openConfirmationModal();
  },

  warningConfirmation(message, callbackFunction) {
    this.confirm(message, callbackFunction)
  },

  resolveConfirmation(resolve) {
    resolve();
  },

  openConfirmationModal() {
    document.querySelector('body').classList.add('confirm-modal-open');
  },

  closeConfirmationModal(response) {
    document.querySelector('body').classList.remove('confirm-modal-open');
    get(this, 'confirmCallbackFunction')(response);
    this.setupDefaults();
  }

});
