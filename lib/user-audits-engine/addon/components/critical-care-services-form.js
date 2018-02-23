import { get, set } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';
import FormView from 'hyspa-form-components/components/form-view';
import layout from '../templates/components/critical-care-services-form';

export default FormView.extend({
  layout,
  classNames: ['critical-care-services'],
  classNameBindings: ['colSpan'],
  dynamicFormRegistry: service(),

  currentCriticalCareServices: alias('currentApp.auditFormObject.criticalCareServices'),
  customFieldDefinitions: alias('currentCriticalCareServices.customFieldDefinitions'),
  customFieldValues: alias('currentCriticalCareServices.customFieldValues'),
  hasCustomFields: alias('currentCriticalCareServices.hasCustomFields'),

  criticalTime: null,
  criticalTimeIsValid: true,

  submitCriticalTime() {
    if (isEmpty(get(this, 'criticalTime'))) {
      set(this, 'criticalTimeIsValid', false);
    } else {
      // console.log('submit critical time', get(this, 'criticalTime'));
    }
  },

  actions: {
    triggerCriticalTimeSubmit() {
      this.submitCriticalTime();
    }
  }
});
