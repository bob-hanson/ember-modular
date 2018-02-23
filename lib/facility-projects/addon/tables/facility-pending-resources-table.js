import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  tableDefinition: computed(function() {
    return {
      columns: [
        {
          label: 'Name',
          valuePath: 'name',
          linkPath: 'linkPath',
          cellType: 'hyspa-light-table-cell',
          formatAs: 'link',
          width: '30%'
        },
        {
          label: 'Role',
          valuePath: 'role',
          width: '20%'
        },
        {
          label: 'NYS',
          valuePath: 'notYetStarted',
          width: '8%'
        },
        {
          label: 'I/P',
          valuePath: 'inProgress',
          width: '8%'
        },
        {
          label: 'QA Ready',
          valuePath: 'qaReady',
          width: '13%'
        },
        {
          label: 'QA I/P',
          valuePath: 'qaInProgress',
          width: '13%'
        },
        {
          label: 'Total',
          valuePath: 'total',
          width: '8%'
        }
      ]
    }
  })
});
