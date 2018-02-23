import { computed, get } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/new-organization';

export default ContentView.extend({
  layout,
  percentageWidth: 80,
  primaryButtonText: computed("", function () {
    return get(this, 'i18n').t('admin.organizations.forms.primaryButtonText.create');
  })
});
