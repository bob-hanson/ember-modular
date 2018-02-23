import Component from '@ember/component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  currentApp: service(),
  classNames: ['app-wrapper'],

  click() {
    get(this, 'currentApp').onDocumentClick();
  }

});
