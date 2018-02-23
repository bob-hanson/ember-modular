import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import FormView from 'hyspa-form-components/components/form-view';
import layout from '../templates/components/import-claims-assign-audit-form';

export default FormView.extend({
  layout,
  classNames: ['import-claims-assign-audit-form'],
  classNameBindings: ['colSpan'],

  primaryButtonText: 'Schedule Audit',
  secondaryButtonText: 'Preview Claims',

  staticCollections: service(),

  posSelectOptions: alias('staticCollections.posArray'),

  initComponent() {
    this.buildFormObject();
  },

  buildFormObject() {

  },

  actions: {

    triggerPosSelected() {

    }

  }


});
