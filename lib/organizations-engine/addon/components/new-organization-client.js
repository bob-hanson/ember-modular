import { computed, get } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/new-organization-client';

export default ContentView.extend({
  layout,
  percentageWidth: 60,
  primaryButtonText: computed("", function () {
    return get(this, 'i18n').t('admin.clients.forms.primaryButtonText.create');
  })

});
