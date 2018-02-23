import BaseComponent from 'hyspa-base-components/components/base-component';
import { inject as service } from '@ember/service';
import { notEmpty } from '@ember/object/computed';
import { computed, get, set } from '@ember/object';
import { isPresent } from '@ember/utils';
import layout from '../templates/components/hyspa-basic-record-importer';

export default BaseComponent.extend({
  layout,
  classNames: ['hyspa-basic-record-importer'],
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

    if (isPresent(get(this, 'uploadAction'))) {
      this.attrs.uploadAction(formData);
    } else {
      get(this, 'repository').bulkUploadRecords(get(this, 'uploaderFor'), formData)
        .then(this.handleFilesUploaded.bind(this));
    }
  },

  handleFilesUploaded() {
    if (this.afterUploadAction) {
      this.afterUploadAction();
    }
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
