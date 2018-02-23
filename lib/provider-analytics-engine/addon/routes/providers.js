// import Ember from 'ember';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('isViewingSearchResults', this.get('currentApp.currentRoute') === 'provider-analytics.providers.index');
  }

});
