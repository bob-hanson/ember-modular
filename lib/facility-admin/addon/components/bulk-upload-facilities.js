import FormView from 'hyspa-form-components/components/form-view';
import { get, set, computed } from '@ember/object';
import { notEmpty } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import layout from '../templates/components/bulk-upload-facilities';

export default FormView.extend({
  layout,
  classNames: ['bulk-upload-facilities'],
  classNameBindings: ['colSpan'],
  repository: service(),
  filesToUpload: null,
  hasFiles: notEmpty('filesToUpload'),
  validFileExtensions: computed(function () {
    return ['csv']
  }),

  filesDropped(files) {
    set(this, 'filesToUpload', files);
  },

  uploadFile() {
    var formData = new FormData();

    get(this, 'filesToUpload').forEach(function (file) {
      formData.append('files[][resource_obj]', get(file, 'resourceObj'));
      formData.append('files[][resource_id]', get(file, 'resourceFileName'));
    });
    get(this, 'repository').bulkUploadRecords('facilities', formData);
  },

  actions: {
    triggerFilesDropped(files) {
      this.filesDropped(files)
    },
    triggerUpload() {
      this.uploadFile();
    }
  }

});
