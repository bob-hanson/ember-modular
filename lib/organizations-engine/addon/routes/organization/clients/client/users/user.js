import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model(params) {
    return this.modelFor('organization.clients.client.users').findBy('id', params.userSlug);
    //
    // return this.get('store').find('client', params.id).then().catch();
  },

  setupController(controller, currentUser) {
    this._super(controller, currentUser);

    controller.set('currentUser', currentUser);
  },

  afterModel(currentUser) {

    this.setSelectedModel(currentUser);
  },

  setSelectedModel(currentUser) {
    this.modelFor('organization.clients.client.users').setEach('isSelected', false);
    currentUser.set('isSelected', true);
  }

});
