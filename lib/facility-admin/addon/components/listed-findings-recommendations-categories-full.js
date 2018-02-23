import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import FindingsRecommendationsCategoryTable from 'facility-admin/tables/findings-recommendations-categories-table';
import layout from '../templates/components/listed-findings-recommendations-categories-full';

export default ContentView.extend(
  FindingsRecommendationsCategoryTable,
  FilterList, {
    layout,
    classNames: ['listed-findings-recommendations-categories-full'],
    classNameBindings: ['colSpan'],
    facilityAudit: service(),
    facilityAuditRepository: service(),

    filterProperties: null,

    initComponent() {
      this.setDefaults();
      this.setFilteredCollection();
    },

    setDefaults() {
      set(this, 'filterProperties', ['categoryName']);
    }

  });
