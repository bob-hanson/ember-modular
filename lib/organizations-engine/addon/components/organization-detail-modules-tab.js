import { computed, get } from '@ember/object';
import { alias } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/organization-detail-modules-tab';

export default BaseComponent.extend({
  layout,
  classNames: ['organization-detail-modules-tab'],
  classNameBindings: ['colSpan'],

  currentProducts: alias('currentModel.products'),
  productsHaveLoaded: alias('currentProducts.isFulfilled'),
  isAccountEnabled: alias('currentModel.isEnabled'),
  isDatabaseDependant: alias('currentModel.isDatabaseDependant'),
  accountEnabledText: computed('isAccountEnabled', function() {
    return get(this, 'isAccountEnabled') ? get(this, 'i18n').t('objectState.enabled')
                                        : get(this, 'i18n').t('objectState.disabled');
  }),

  databaseStatus: computed('currentModel.creationStatus', function () {
    switch(get(this, 'currentModel.creationStatus')) {
      case 'success':
        return "Database created";
      case 'pending':
        return "Database creation pending";
      case 'failed':
        return "Database creation failed";
    }
  }),

  actions: {

    triggerDatabaseCreationRetry() {
      this.attrs.onCreateDatabaseRetry();
    }

  }


});
