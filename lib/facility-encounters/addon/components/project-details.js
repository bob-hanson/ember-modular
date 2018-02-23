import ListColumn from 'hyspa-common-components/components/list-column';
import layout from '../templates/components/project-details';

export default ListColumn.extend({
  layout,
  classNames: ['project-details'],
  classNameBindings: ['colSpan'],
  percentageWidth: 20,

  actions: {

    triggerCloseQA() {
      // console.log('triggerCloseQa');
    },

    triggerCloseSendReport() {
      // console.log('triggerCloseSendReport');
    },

    triggerClosePendingReport() {
      // console.log('triggerClosePendingReport');
    }

  }

});
