import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import layout from '../templates/components/manage-facility-projects';

export default BaseComponent.extend({
  layout,
  classNames: ['manage-facility-projects'],
  classNameBindings: ['colSpan'],
  facilityAudit: service()
});
