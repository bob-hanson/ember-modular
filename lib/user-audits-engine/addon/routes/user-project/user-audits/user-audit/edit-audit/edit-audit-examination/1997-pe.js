import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import BaseRoute from 'hyspa-base-components/routes/base-route';

export default BaseRoute.extend({

  userAuditState: service(),

  afterModel() {
    set(this, 'userAuditState.currentExamPath', 'pe97');
  }

});
