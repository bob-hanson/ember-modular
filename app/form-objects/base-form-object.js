import Object from '@ember/object';
import { isPresent } from '@ember/utils';
import { get, set } from '@ember/object';

export default Object.extend({
  touchables: null,

  init() {
    this._super();
    set(this, "touchables", []);
    this.setTouchableAttributes(false);
  },

  assignModel(model, isCreating) {
    if (isCreating) { return; }
    model.eachAttribute(this.handleSettingAttribute.bind(this, model));
    return this;
  },

  handleSettingAttribute(model, key) {
    this.set(key, model.get(key));
  },

  setTouchableAttributes(bool) {
    let attrs = get(this, 'touchables');
    if (isPresent(attrs)) {
      let touchableProperties = {};
      attrs.forEach(function(attr) {
        touchableProperties[attr] = bool;
      });
      this.setProperties(touchableProperties);
    }
  }

});
