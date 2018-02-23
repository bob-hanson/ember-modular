import { computed, get } from '@ember/object';
import { alias, not } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/provider-analytics';

export default BaseComponent.extend({
  layout,
  classNames: ['analytics'],
  classNameBindings: ['colSpan'],

  shouldDisplayNav: alias('currentApp.shouldDisplayNav'),
  isToggleNavView: not('shouldDisplayNav'),

  clientRoot: computed("currentSession", function () {
    return get(this, 'currentSession.apiRoot') + 'clients/' + get(this, 'currentClient.id');
  })

});
