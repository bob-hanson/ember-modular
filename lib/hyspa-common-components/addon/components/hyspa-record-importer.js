import BaseComponent from 'hyspa-base-components/components/base-component';
import { get, set, setProperties, computed } from '@ember/object';
import { not, bool } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { ifThenElseWithValues } from 'ember-macaroni';
import layout from '../templates/components/hyspa-record-importer';

export default BaseComponent.extend({
  layout,
  classNames: ['hyspa-record-importer'],
  classNameBindings: ['colSpan', 'showMapper'],
  utilities: service(),
  repository: service(),
  uploaderFor: null,
  tableColumns: null,
  existingMaps: null,
  filesToUpload: null,
  hasFile: bool('filesToUpload'),
  csvHeaders: null,
  showUploader: true,
  showMapper: not('showUploader'),
  wizardArrow: ifThenElseWithValues('showUploader', 'arrow_forward', 'arrow_back'),
  validFileExtensions: computed(function () {
    return ['csv']
  }),

  initComponent() {
    this.setupDefaults();
    this.fetchTableInfo();
  },

  setupDefaults() {
    setProperties(this, 'csvHeaders', []);
  },

  fetchTableInfo() {
    get(this, 'repository').fetchRecordImporterData(get(this, 'uploaderFor'))
      .then(this.setTableMetadata.bind(this));
  },
  
  setTableMetadata(response) {
    setProperties(this, {
      tableColumns: response.table_metadata.columns_metadata,
      existingMaps: response.header_mappings
    });
  },

  uploadFile() {
    var formData = new FormData();
    get(this, 'filesToUpload').forEach(function (file) {
      formData.append('csv_files[]', get(file, 'resourceObj'));
    });
    get(this, 'repository').bulkUploadRecords(get(this, 'uploaderFor'), formData);
  },

  filesDropped(files) {
    set(this, 'filesToUpload', files);
  },

  parseCsvHeaders(csv) {
    var headers = get(this, 'utilities').csvHeadersToArray(csv[0]);
    set(this, 'csvHeaders', headers);
    this.forwardWizard();
  },

  wizardStepChange() {
    get(this, 'showUploader') ? this.forwardWizard() : this.backWizard();
  },

  forwardWizard() {
    set(this, 'showUploader', false);
  },

  backWizard() {
    set(this, 'showUploader', true);
  },



  actions: {
    triggerUpload() {
      this.uploadFile();
    },
    triggerFilesDropped(files) {
      this.filesDropped(files);
    },
    triggerCsvParsed(csv) {
      this.parseCsvHeaders(csv);
    },
    triggerWizardStepChange() {
      this.wizardStepChange();
    }
  }
});
