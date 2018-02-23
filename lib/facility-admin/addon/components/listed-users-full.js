import ContentView from 'hyspa-common-components/components/content-view';
import FacilityUsersTable from 'facility-admin/tables/facility-users-table';
import layout from '../templates/components/listed-users-full';

export default ContentView.extend(
  FacilityUsersTable, {
    layout,
    classNames: ['listed-users-full'],
    classNameBindings: ['colSpan']
  });
