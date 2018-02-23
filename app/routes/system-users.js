import BaseRoute from './base-route';

export default BaseRoute.extend({

  model() {
    return []; // In the future we could fetch all users available to the logged in user. but we dont have any need at the moment.
  },

  // setupController(controller, currentUsers) {
  //   // this._super(controller, currentUsers);
  // },

  // handleSuccessfulResponse(response) {
  //   return this.store.push(response);
  // }

});
