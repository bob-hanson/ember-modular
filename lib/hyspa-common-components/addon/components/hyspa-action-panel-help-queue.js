import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { get } from '@ember/object';
import layout from '../templates/components/hyspa-action-panel-help-queue';

export default BaseComponent.extend({
  layout,
  classNames: ['hyspa-action-panel-help-queue'],
  classNameBindings: ['colSpan'],
  padding: '2,2,0,2',
  hyspaActionPanelService: service(),
  helpQueue: alias('hyspaActionPanelService.renderedHelpCollection'),

  removeFromQueue(helpObject) {
    get(this, 'helpQueue').removeObject(helpObject);
  },

  actions: {
    triggerRemoveFromQueue(helpObject) {
      this.removeFromQueue(helpObject)
    }
  }
  
});
