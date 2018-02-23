import BaseComponent from 'hyspa-base-components/components/base-component';
import RepeatedFormComponentMixin from 'hyspa-form-components/mixins/repeated-form-component-mixin'
import layout from '../templates/components/repeated-form-component';

export default BaseComponent.extend(
  RepeatedFormComponentMixin, {
  layout,
  classNames: ['repeated-form-component'],
  classNameBindings: ['colSpan', 'tableLayoutRow', 'hasRemovalButton'],

  initComponent() {
    if (this.attrs.onInit) {
      this.attrs.onInit(this);
    } 
  }

});
