import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import layout from '../templates/components/help-launcher-icon';

export default BaseComponent.extend({
  layout,
  hyspaActionPanelService: service(),  
  fontSize: 'small',

  launchHelp() {
    get(this, 'hyspaActionPanelService').launchHelpQueue(get(this, 'helpKey'));
  },

  actions: {
    triggerLaunchHelp() {
      this.launchHelp();
    }
  }
});
