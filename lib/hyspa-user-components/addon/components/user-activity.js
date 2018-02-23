import { debounce } from '@ember/runloop';
import { isPresent } from '@ember/utils';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/user-activity';
import $ from 'jquery';

export default BaseComponent.extend({
  layout,
  activityDateTitle: 'Today',
  listDescription: 'Below is the activity that Bob has done in the week. Use the filters to modify the list.',

  initComponent() {
    this.resizeActivities();
  },

  resizeActivities() {
    debounce(this, this._resizeActivities, 150);
  },

  _resizeActivities() {
    var self = this,
        activityItems = document.getElementById('activity-items'),
        activityMeta = document.getElementById('activity-meta'),
        tabPanel = document.getElementById('user-activites'),
        contentHeight = 0;

    if (isPresent(tabPanel) && isPresent(activityMeta)) {
      contentHeight = tabPanel.offsetHeight - activityMeta.offsetHeight;
    }

    activityItems.style.height = contentHeight + "px";
    $(window).resize(function() {
      debounce(self, self._resizeActivities, 150);
    });
  }


});
