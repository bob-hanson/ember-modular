// import Ember from 'ember';
import FormView from 'hyspa-form-components/components/form-view';
import layout from '../templates/components/patient-facility-data-form';
import PatientDataMixin from 'user-audits-engine/mixins/patient-data';

export default FormView.extend(
  PatientDataMixin, {
  layout,
  classNames: ['patient-data-form', 'patient-facility-data-form'],
  classNameBindings: ['colSpan'],

  initComponent() {
    this._super();
    this.setupGenderOptions();
    this.setupRvuPosOptions();
    this.setupPosCorrectOptions();
  },

});
