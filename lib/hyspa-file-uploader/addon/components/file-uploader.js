import { computed, observer, get, set, setProperties } from '@ember/object';
import { gt, not } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { debounce, scheduleOnce } from '@ember/runloop';
import { isEmpty, isPresent } from '@ember/utils';
import { Promise } from 'rsvp';
import BaseInput from 'hyspa-base-components/components/base-input';
import layout from '../templates/components/file-uploader';

export default BaseInput.extend({
  layout,
  classNames: ['uploader'],
  store: service(),
  requiredProperty: null,
  isRequired: false,
  isInvalid: false,
  resetOn: false,
  hasFormData: true,
  isMultiple: true,
  buttonText: 'Add File',
  selectedFiles: null,
  selectedFilesForUpload: null,
  inValidFiles: null,
  validFileExtensions: null,
  selectedFileTypes: null,
  fileTypeOptions: null,
  allFileTypesSelected: false,
  selectedFileDescription: null,
  resetFileUploader: true,
  resetFileTypeFilter: false,
  resetInputTrigger: false,
  enforceFileSize: true,
  //maxFileSize: 209715200, // 200mb
  maxFileSize: 99614720, // 200mb
  hasOverMaxFiles: false,
  validateDescription: true,
  descriptionCharLength: 100,
  returnCsv: false,
  selectedFilesCsv: null,

  placeholderText: 'Browse for a File',
  label: 'Upload File',
  uploaderType: 'image',
  fileSizeText: null,
  isAdvancedFeatureCapable: true,
  autoProcess: true,

  hasSelectedFiles: gt('selectedFiles.length', 0),
  isDisabled: not('hasSelectedFiles'),
  isInvalidDescriptionLength: gt('selectedFileDescription.length', 'descriptionCharLength'),
  hasFilesAvailableForUpload: gt('selectedFilesForUpload.length', 0),

  initComponent() {
    this._super();
    this.setDefaults();
    this.setIsAdvancedFeatureCapable();
    this.resetFieldsAndProperties();
  },

  setDefaults() {
    this.selectedFiles = [];
    this.selectedFilesForUpload = [];
    this.selectedFilesCsv = [];
    this.inValidFiles = [];
    // this.validFileExtensions = [];
    this.selectedFileTypes = [];
    this.fileTypeOptions = [
      { 'optionName': 'Image', 'optionValue': 'image' },
      { 'optionName': 'Document', 'optionValue': 'document' },
      { 'optionName': 'Video', 'optionValue': 'video' }
    ];
  },

  validFileTypeDisplay: computed('', function() {
    return get(this, 'validFileExtensions').join(', ');
  }),

  setErrorToast(message) {
    get(this, 'toast').errorToast(message, 'small-icon');
  },

  setIsAdvancedFeatureCapable() {
    var div = document.createElement('div');
    set(this, 'isAdvancedFeatureCapable', (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window);
  },

  validateAddFile() {
    var selectedFiles = get(this, 'selectedFiles');

    if (isEmpty(selectedFiles)) {
      this.setErrorToast("You must select a file to be uploaded.");
      return false;
    }

    if (selectedFiles) {
      this.createFileObjects(selectedFiles);
    }
  },

  isValidFileType(fileObj) {
    var fileExtension = fileObj.name.split('.')[fileObj.name.split('.').length - 1].toLowerCase(),
      lowerCaseExtensionList = get(this, 'validFileExtensions').map(function (extension) {
        return extension.toLowerCase();
      });

    if (lowerCaseExtensionList.includes(fileExtension)) {
      fileObj.resourceType = fileExtension;
      return true;
    } else {
      if (get(this, 'isMultiple')) {
        get(this, 'inValidFiles').push(fileObj.name);
      }
      this.setErrorToast("Invalid File Type.");
      this.resetUploadFields();
      return false;
    }
  },

  isValidFileSize: function (fileSize) {
    if (this.checkFileSize(fileSize) && get(this, 'enforceFileSize')) {
      set(this, 'hasOverMaxFiles', true);
      debounce(this, this.notifyMaxFileSize, 100, true);
      return false;
    } else {
      return true;
    }
  },

  createFileObjects: function (selectedFiles) {
    var selectedFilesForUpload = get(this, 'selectedFilesForUpload'),
        fileLength;

    if (selectedFiles) {
      fileLength = selectedFiles.length;
      for (let i = 0; i < fileLength; i++) {
        if (this.isValidFileType(selectedFiles[i])) {
          if (this.isValidFileSize(selectedFiles[i].size)) {
            this.addFileToUploadArray(selectedFiles[i], selectedFilesForUpload);
            if (get(this, 'returnCsv')) {
              this.addCsvToCsvArray(selectedFiles[i]);
            }
          }
        }
      }
    }
    this.resetUploadFields();
  },

  addFileToUploadArray(selectedFile, selectedFilesForUpload) {
    this.createFileObject(this, selectedFile)
        .then(this.pushFileObjectIntoSelectedFiles.bind(this, selectedFilesForUpload));
  },

  addCsvToCsvArray(selectedFile) {
    this.extractCsv(selectedFile)
      .then(this.pushCsvToCsvArray.bind(this));
  },

  pushFileObjectIntoSelectedFiles(selectedFilesForUpload, fileObject) {
    get(this, 'selectedFilesForUpload').pushObject(fileObject);
    if (this.attrs.onFilesAdded) {
      this.attrs.onFilesAdded(get(this, 'selectedFilesForUpload'));
    }
  },

  pushCsvToCsvArray(csv) {
    get(this, 'selectedFilesCsv').pushObject(csv);
    if (this.attrs.onReturnedCsv) {
      this.attrs.onReturnedCsv(get(this, 'selectedFilesCsv'));
    }
  },

  notifyInvalidFileTypes: function () {
    var inValidFiles = get(this, 'inValidFiles'),
        inValidFileCount = inValidFiles.get('length'),
        validFileFormats = [],
        validLastFileForamts,
        messageTail = '';

    validFileFormats.pushObjects(get(this, 'validFileExtensions'));
    validLastFileForamts = validFileFormats[validFileFormats.length - 1];
    messageTail = 'The following formats are accepted: .' + validFileFormats.removeObject(validLastFileForamts).join(', .') + ' and .' + validLastFileForamts + '. Please choose a new file.';


    if (isPresent(inValidFiles)) {
      if (inValidFileCount > 1) {
        this.setErrorToast(this.multipleFileUploadErrorMessage(inValidFiles, messageTail));
      } else {
        this.setErrorToast(this.singleFileUploadErrorMessage(inValidFiles, messageTail));
      }
      inValidFiles.clear();
      set(this, 'inValidFiles', []);
    }
  },

  singleFileUploadErrorMessage: function (inValidFiles, messageTail) {
    return '<p>Error saving ' + inValidFiles[0] + '.</p>' +
      '<p>This is not a supported file format and will not be uploaded.</p>' +
      '<p>' + messageTail + '</p>';
  },

  multipleFileUploadErrorMessage: function (inValidFiles, messageTail) {
    return '<p>Error saving files.</p>' +
      '<p>' + inValidFiles.join(', ') + '</p>' +
      '<p>These are not supported file formats and will not be uploaded.</p>' +
      '<p>' + messageTail + '</p>';
  },

  notifyMaxFileSize: function () {
    if (get(this, 'hasOverMaxFiles')) {
      this.setErrorToast('One or more of your selected files is over the max file size allowed.');
      set(this, 'hasOverMaxFiles', false);
    }
  },

  createFileObject: function (currentComponent, fileObj) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader(),
          fileName = currentComponent.get('utilities').unifyString(fileObj.name),
          fileType = currentComponent.get('utilities').extractFileType(fileObj.name),
          fileOverMax = currentComponent.checkFileSize(fileObj.size);

      reader.onload = function (fileSrc) {
        resolve(currentComponent.get('store').createRecord('uploaded_file', {
          id: new Date().valueOf(),
          resourceName: fileName,
          resourceSize: fileObj.size,
          resourceType: fileType,
          resourceFileName: fileObj.name,
          resourceFileType: fileObj.type,
          resourceFileSize: fileObj.size,
          resourceObj: fileSrc.target.result,
          fileOverMax: fileOverMax
        }));
      };
      reader.onerror = function (fileErrorObj) {
        reject(fileErrorObj);
      };
      reader.readAsDataURL(fileObj);
      
    });
  },

  extractCsv(fileObj) {
    return new Promise(function(resolve, reject) {
      var reader = new FileReader();

      reader.onload = function() {
        resolve(reader.result);
      }

      reader.onerror = function(fileErrorObj) {
        reject(fileErrorObj);
      }

      reader.readAsBinaryString(fileObj);

    });
  },

  checkFileSize: function (fileSize) {
    return fileSize > get(this, 'maxFileSize');
  },

  resetUploader: observer('resetFileUploader', function () {
    if (get(this, 'resetFileUploader')) {
      this.resetFieldsAndProperties();
      set(this, 'resetFileUploader', false);
    }
  }),

  resetFieldsAndProperties: function () {
    this.resetUploadFields();
    get(this, 'selectedFilesForUpload').clear();
  },

  resetUploadFields: function () {
    scheduleOnce('afterRender', this, function() {
      setProperties(this, {'resetInputTrigger': true, 'resetFileTypeFilter': true, 'placeholderText': 'Select A File' });
      if (isPresent(get(this, 'selectedFiles'))) {
        set(this, 'selectedFiles', []);
      }
    });
  },

  removeFileFromUploadArray: function (fileObject) {
    get(this, 'selectedFilesForUpload').removeObject(fileObject);
    get(this, 'store').unloadRecord(fileObject);
  },

  inputFileChanged(fileObj) {
    if (this.isValidFileType(fileObj[0])) {
      this.setPlaceholderText(fileObj[0]);
      this.setFileSize(fileObj[0]);
      this.checkForAutoProcess(fileObj[0]);
    }
  },

  dropFileAdded(fileObj) {
    if (this.isValidFileType(fileObj[0])) {
      this.setFileSize(fileObj[0]);
      this.checkForAutoProcess(fileObj[0]);
    }
  },

  checkForAutoProcess(fileObj) {
    if (get(this, 'autoProcess')) {
      this.validateAddFile(fileObj);
    }
  },

  setPlaceholderText(fileObj) {
    scheduleOnce('afterRender', this, function() {
      set(this, 'placeholderText', fileObj.name);
    });
  },

  setFileSize(fileObj) {
    var newLabel = get(this, 'label') + " - " + (fileObj.size / 1000000) + " MB";
    set(this, 'label', newLabel);
  },

  actions: {

    triggerFileDrop(fileObj) {
      this.dropFileAdded(fileObj);
    },

    triggerInputChange(fileObj) {
      this.inputFileChanged(fileObj);
    },

    triggerRemoveFileFromUploadArray: function (fileObj) {
      this.removeFileFromUploadArray(fileObj);
    },

    triggerAddFileToUploadList: function () {
      this.validateAddFile();
    },

    triggerUploadListReset: function () {
      this.resetUploadFields();
    }

  }

});
