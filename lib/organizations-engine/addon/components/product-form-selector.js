import { observer, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import { scheduleOnce } from '@ember/runloop';
import ComponentContainer from 'hyspa-common-components/components/component-container';
import layout from '../templates/components/product-form-selector';

export default ComponentContainer.extend({
  layout,
  classNames: ['products'],
  availableProducts: alias('currentApp.availableProducts'),
  currentProducts: null,

  initComponent() {
    this.resetAvailableProducts();
  },

  resetAvailableProducts() {
    get(this, 'availableProducts')
        .setEach('isSelected', false);
  },

  setCurrentSelectedProductsAfter: observer('currentProducts', function() {
    scheduleOnce('afterRender', this, this.setCurrentSelectedProducts.bind(this));
  }),

  setCurrentSelectedProducts() {
    var currentProducts = get(this, 'currentProducts'),
        currentProductCodes,
        availableProducts = get(this, 'availableProducts'),
        clickAction = this.attrs.clickAction;

    if (isPresent(currentProducts)) {
      currentProductCodes = currentProducts.getEach('productCode');
      availableProducts.forEach(function (availableProduct) {
        if (currentProductCodes.includes(availableProduct.get('productCode'))) {
          clickAction(availableProduct);
        }
      });
    }
  }

});
