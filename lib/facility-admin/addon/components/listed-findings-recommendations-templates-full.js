import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import ContentView from 'hyspa-common-components/components/content-view';
import FilterList from 'hyspa-common-components/mixins/filter-list';
import FindingsRecommendationsTemplateTable from 'facility-admin/tables/findings-recommendations-template-table';
import layout from '../templates/components/listed-findings-recommendations-templates-full';

export default ContentView.extend(
  FindingsRecommendationsTemplateTable,
  FilterList, {
    layout,
    classNames: ['listed-findings-recommendations-templates-full'],
    classNameBindings: ['colSpan'],
    facilityAudit: service(),
    facilityAuditRepository: service(),

    filterProperties: null,

    initComponent() {
      this.setDefaults();
      this.setFilteredCollection();
    },

    setDefaults() {
      set(this, 'filterProperties', ['shortDescription', 'categoryName', 'subCategoryName']);
    }

  });
