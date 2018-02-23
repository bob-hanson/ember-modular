import Service from '@ember/service';
import { not, equal } from '@ember/object/computed';

export default Service.extend({

  isViewingAudit: false,
  isNotViewingAudit: not('isViewingAudit'),
  isViewingFullProjectList: true,
  currentExamPath: null,

  is95Path: equal('currentExamPath', 'pe95'),
  is97Path: equal('currentExamPath', 'pe97'),

  toggleWorkQueue() {
    this.toggleProperty('isViewingAudit');
  }


});
