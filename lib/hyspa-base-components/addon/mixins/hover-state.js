import Mixin from '@ember/object/mixin';
import { set } from '@ember/object';

export default Mixin.create({
  isHovering: false,

  mouseEnter() {
    set(this, 'isHovering', true);
  },

  mouseLeave() {
    set(this, 'isHovering', false);
  }

});
