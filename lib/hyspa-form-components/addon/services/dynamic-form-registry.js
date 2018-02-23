import Service from '@ember/service';
import { get, set, setProperties } from '@ember/object';

export default Service.extend({
  registry: null,

  register(formName, formInstance) {
    var registry = get(this, 'registry');
    set(registry, formName, formInstance);
  },

  init() {
    this._super(...arguments);
    this.setDefaults();
  },

  setDefaults() {
    setProperties(this, {
      registry: {}
    });
  }

});
