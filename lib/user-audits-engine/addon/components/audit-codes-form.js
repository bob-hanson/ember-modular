import Object, { get, set } from '@ember/object';
import FormView from 'hyspa-form-components/components/form-view';
import layout from '../templates/components/audit-codes-form';

export default FormView.extend({
  layout,
  classNames: ['audit-codes-form'],
  classNameBindings: ['colSpan'],

  dxCodes: null,
  sortableList: null,

  initComponent() {
    this.setupDxCodes();
    this.setupSortableList();
  },

  setupDxCodes() {
    set(this, 'dxCodes', []);
  },

  setupSortableList() {
    set(this, 'sortableList', [
      Object.create({ reported: 598484 }),
      Object.create({ reported: 894189 }),
      Object.create({ reported: 189748 }),
      Object.create({ reported: 498189 })
    ]);
  },

  addDiagnosisCode() {
    get(this, 'dxCodes').pushObject(Object.create());
  },

  removeDiagnosisCode(currentDxCode) {
    get(this, 'dxCodes').removeObject(currentDxCode);
  },

  actions: {
    sortEndAction() {
      // console.log('sorted');
    },

    triggerAddDiagnosisCode() {
      this.addDiagnosisCode();
    },

    triggerRemoveDiagnosisCode(currentDxCode) {
      this.removeDiagnosisCode(currentDxCode);
    }

  }

});
