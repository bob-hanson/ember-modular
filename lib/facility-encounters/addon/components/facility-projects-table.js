import { equal } from '@ember/object/computed';
import BaseComponent from 'hyspa-base-components/components/base-component';
import AuditTable from '../tables/facility-audit-projects-table';
import QaTable from '../tables/facility-qa-projects-table';
import layout from '../templates/components/facility-projects-table';

export default BaseComponent.extend(
  AuditTable,
  QaTable, {
  layout,
  filteredProjectType: null,
  isAudit: equal('filteredProjectType', 'audit')
});
