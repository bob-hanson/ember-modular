// import Ember from 'ember';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  setupController(controller, model) {
    this._super(controller, model);
    controller.set('currentClient', this.modelFor('client'));
  }

});
