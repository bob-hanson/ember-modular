// import Ember from 'ember';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  model(params) {
    return this.modelFor('user-project.user-audits').findBy('auditSlug', params.auditSlug );
  }

});
