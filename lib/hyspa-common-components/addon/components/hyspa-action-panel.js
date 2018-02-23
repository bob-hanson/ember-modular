import BaseComponent from 'hyspa-base-components/components/base-component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { ifThenElseWithValues } from 'ember-macaroni';
import { not, alias, notEmpty } from '@ember/object/computed';
import layout from '../templates/components/hyspa-action-panel';

export default BaseComponent.extend({
  layout,
  classNames: ['hyspa-action-panel'],
  classNameBindings: ['isOpen', 'isExpanded', 'isCollapsed'],
  hyspaActionPanelService: service(),
  isOpen: alias('hyspaActionPanelService.actionPanelOpen'),
  isCollapsed: not('isOpen'),
  isExpanded: alias('hyspaActionPanelService.actionPanelExpanded'),
  handleIcon: ifThenElseWithValues('isOpen', 'arrow_forward', 'arrow_back'),
  expandIcon: ifThenElseWithValues('isExpanded', 'arrow_forward', 'arrow_back'),
  actionComponent: alias('hyspaActionPanelService.actionComponent'),
  hasActionComponent: notEmpty('actionComponent'),

  togglePanel() {
    get(this, 'isOpen') ? get(this, 'hyspaActionPanelService').closeActionPanel() : get(this, 'hyspaActionPanelService').openActionPanel();
  },

  toggleExpand() {
    this.toggleProperty('hyspaActionPanelService.actionPanelExpanded');
  },

  actions: {
    triggerTogglePanel() {
      this.togglePanel();
    },
    triggerToggleExpand() {
      this.toggleExpand();
    }
  }

});
