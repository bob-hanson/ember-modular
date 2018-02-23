import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import HyspaSingleSelect from './hyspa-single-select';

export default HyspaSingleSelect.extend({
  staticCollections: service(),
  selectOptions: alias('staticCollections.stateArray')
});
