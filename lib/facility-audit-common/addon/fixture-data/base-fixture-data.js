import EmberObject, { get } from '@ember/object';

export default EmberObject.extend({
  data: null,
  includes: null,

  init() {
    this._super(...arguments);
    this.setupData();
    this.setupIncludes();
  },

  setupData() {},
  setupIncludes() {},

  fetchAll(hasIncludes) {
    if (hasIncludes) {
      return { "data": get(this, 'data'), "included": get(this, 'includes') };
    } else {
      return { "data": get(this, 'data') };
    }
  }

});
