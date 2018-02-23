import Mixin from '@ember/object/mixin';
import { computed, get } from '@ember/object';

const getSelectedItems = table => get(table, 'selectedRows').map(row => row.content.id) || [];

export default Mixin.create({
  tableDefinition: computed(function() {
    return {
      columns: [
        {
          label: 'Case',
          valuePath: 'caseNo', //TODO: ADD THIS
          width: '10%'
        },
        {
          label: 'Patient ID',
          valuePath: 'patientAltId',
          width: '20%'
        },
        {
          label: 'Patient Name',
          valuePath: 'patientName',
          width: '20%'
        },
        {
          label: 'Status',
          valuePath: 'encounterStatus',
          width: '20%'
        },
        {
          label: 'QA Trail',
          valuePath: 'encounterComments', //TODO: FETCH DATE
          width: '10%'
        },
        {
          label: 'Comment',
          valuePath: 'encounterComments',
          width: '12%'
        }
      ],
      actionsMenu: [
        {
          labelText: "Delete DOS",
          action: get(this, 'actions.triggerDeleteDOS')
        },
        {
          labelText: "Move DOS",
          action: get(this, 'actions.triggerMoveDOS')
        }
      ]
    }
  }),
  actions: {
    triggerDeleteDOS({table}) {
      const seletedItems = getSelectedItems(table);
      console.log(this, seletedItems, "Delete DOS");
    },
    triggerMoveDOS({table}) {
      const seletedItems = getSelectedItems(table);
      console.log(this, seletedItems, "Move DOS");
    },
  }
});
