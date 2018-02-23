import { computed, get } from '@ember/object';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/status-icon';

export default BaseComponent.extend({
  layout,
  classNames: ['status-icon'],
  classNameBindings: ['status'],
  fontSize: 'regular',
  status: '',

  fontType: computed('statusIcon', function() {
    switch(get(this, 'statusIcon')) {
      case 'notStarted':
        return 'do_not_disturb';
      case 'active':
        return 'check_circle';
      case 'inactive':
        return 'check_circle';
      case 'termed':
        return 'highlight_off';
    }
  })

});
