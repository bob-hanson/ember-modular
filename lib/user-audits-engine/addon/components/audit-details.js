import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/audit-details';

export default BaseComponent.extend({
  layout,
  classNames: ['audit-details'],
  classNameBindings: ['colSpan'],
  codeList: null,

  initComponent() {
    this._super(...arguments);
    this.setCodeList();
  },

  setCodeList() {
    this.set('codeList', [
      {
        label: 'Reported Code',
        value: '99213'
      },
      {
        label: 'Audited Code',
        value: '99213'
      }
    ]);
  }

});
