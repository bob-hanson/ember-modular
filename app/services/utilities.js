import Service, { inject as service } from '@ember/service';

export default Service.extend({
  currentApp: service(),

  unifyString: function (string) {
    var splitString = string.split(' '),
      combinedString = splitString.join('-');

    return combinedString;
  },

  extractFileType(fileName) {
    var fileExtension = fileName.split('.')[fileName.split('.').length - 1].toLowerCase();
    if (this.get('currentApp.validImageTypes').includes(fileExtension)) {
      return 'image';
    } else if (this.get('currentApp.validDocumentTypes').includes(fileExtension)) {
      return 'document';
    } else if (this.get('currentApp.validVideoTypes').includes(fileExtension)) {
      return 'video';
    } else {
      return 'unknown';
    }
  },

  capitalizeFirstLetter: function(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
  },

  lowercaseString: function (str) {
    return str.toLowerCase();
  },

  getMaxValueWithCeiling: function (value, buffer) {
    return Math.ceil(value / buffer) * buffer;
  },

  getDateYear: function () {
    var d = new Date();
    return d.getFullYear();
  },

  convertFloatToCurrency: function (theFloat) {
    return theFloat.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  regExpEscape: function(s) {
    return s ? String(s).replace(/([-()[\]{}+?*.$^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08') : null;
  },

  stripHtml: function (s) {
    return String(s).replace(/(<([^>]+)>)/ig, "").replace(/&nbsp;/g,' ');
  },

  nonAlphaNumericInput: function (event, inputValue) {
    return !inputValue.match(/^[\w\s.-]+$/);
  },

  currencyToDecimal: function (value) {
    if (typeof value === 'number') {
      return value;
    } else {
      return Number(value.replace(/[^0-9.]+/g, ""));
    }
  },

  decimalToCurrency: function (val) {
    return '$' + this.convertFloatToCurrency(parseFloat(val));
  },

  createHashMap: function (arr, key) {
    var map = { length: arr.length },
        i = 0, j = arr.length;
    for (; i < j; ++i) {
      let item = arr[i];
      map[item[key]] = item;
    }
    return map;
  },

  csvHeadersToArray(csvString) {
    return csvString.split(/\r\n|\n/)[0].split(',');
  },

  mergeFormData(fd1, fd2) {
    var pair;
    for (pair of fd2.entries()) {
      fd1.append(pair[0], pair[1]);
    }
    return fd1;
  }

});
