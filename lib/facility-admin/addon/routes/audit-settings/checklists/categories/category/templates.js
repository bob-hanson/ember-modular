import FacilityBaseRoute from 'facility-audit-common/routes/facility-audit-base-route';
import { get, set } from '@ember/object';

export default FacilityBaseRoute.extend({

  model() {
    if (get(this, 'facilityAudit.checklistTemplatesLoaded')) {
      return get(this, 'store').peekAll('facility-checklist-template');
    } else {
      return get(this, 'store').findAll('facility-checklist-template')
        .then(this.handleTemplatesFetched.bind(this));
    }
  },

  handleTemplatesFetched(categories) {
    set(this, 'facilityAudit.checklistTemplatesLoaded', true);
    return categories;
  },

  setupController(controller) {
    this._super(...arguments);
    let currentCategory = this.modelFor('audit-settings.checklists.categories.category');
    controller.set('currentCategory', currentCategory);
    controller.set('currentTemplates', currentCategory.get('facilityChecklistTemplates'));
  }
});
