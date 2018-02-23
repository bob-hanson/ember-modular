import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import FindingsRecommendationsSubategoryTable from 'facility-admin/tables/findings-recommendations-subcategories-table';
import layout from '../templates/components/listed-findings-recommendations-subcategories-full';

export default ContentView.extend(
  FindingsRecommendationsSubategoryTable,
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

