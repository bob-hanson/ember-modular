import FormView from 'hyspa-form-components/components/form-view';
import { inject as service } from '@ember/service';
import { computed, get, set } from '@ember/object';
import FormPropertiesMixin from 'hyspa-form-components/mixins/form-properties-mixin';
import layout from '../templates/components/project-form';

export default FormView.extend(
  FormPropertiesMixin, {
  layout,
  classNames: ['new-project-form'],
  classNameBindings: ['colSpan'],
  facilityAudit: service(),
  hyspaModalService: service(),

  facilityOptions: computed('', function() {
    if (get(this, 'facilityAudit.facilitiesCollectionLoaded')) {
      return get(this, 'store').peekAll('facility');
    } else {
      set(this, 'facilityAudit.facilitiesCollectionLoaded', true);
      return get(this, 'store').findAll('facility');
    }
  }),

  coderOptions: computed('', function() {
    if (get(this, 'facilityAudit.codersCollectionLoaded')) {
      return get(this, 'store').peekAll('facility-coder');
    } else {
      set(this, 'facilityAudit.codersCollectionLoaded', true);
      return get(this, 'store').findAll('facility-coder');
    }
  }),

  myValidator(inputValue, formControls) {
    var auditNameField = formControls.findBy('name', 'auditName');
    return inputValue === get(auditNameField, 'boundModel');
  },

  initComponent() {
    this.bindFormProperties();
  },

  actions: {
    triggerFormSubmit(formData) {
      this.debugFormData(formData);
    },
    triggerFormSave(formData) {
      this.debugFormData(formData);
    },
    triggerFormCancel() {
      alert('canceling form');
    }
  }

});
