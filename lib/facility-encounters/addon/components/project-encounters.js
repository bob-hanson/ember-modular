import ContentView from 'hyspa-common-components/components/content-view';
import layout from '../templates/components/project-encounters';

import EncountersTable from '../tables/project-encounters-table';

export default ContentView.extend(
  EncountersTable, {
  layout,
  classNames: ['project-encounters'],
  classNameBindings: ['colSpan'],
  percentageWidth: 60
});
