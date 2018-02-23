import FormView from 'hyspa-form-components/components/form-view';
import layout from '../templates/components/facility-codes-form';

export default FormView.extend({
  layout,
  classNames: ['facility-codes-form'],
  classNameBindings: ['colSpan']
});
