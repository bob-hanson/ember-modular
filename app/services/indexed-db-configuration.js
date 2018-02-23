import IndexedDbConfigurationService from 'ember-indexeddb/services/indexed-db-configuration';
import { computed, get } from '@ember/object';

export default IndexedDbConfigurationService.extend({
  currentVersion: 1,

  version1: {
    stores: {
      // 'item': '&id,*isRead,*isSynced'
      'audit-drg-code': '&id,msDrg,msDrgTitle,weights,geometricLengthOfStay,arithmeticLengthOfStay,optionName,optionValue',
      'audit-place-of-service': '&id,posCode,posLabel,posDescription,optionName,optionValue',
      'audit-revenue-code': '&id,revenueCode,descriptionMainTerm,descriptionSubClassified,optionName,optionValue',
      'audit-service-type': '&id,serviceLabel,isTimeSensitive,isInpatient,optionName,optionValue',
      'audit-specialty': '&id,code,description,optionName,optionValue',
      'audit-visit-type': '&id,visitLabel,codeRange,auditServiceTypeId,auditServiceType,optionName,optionValue',
      'audit-icd10-code': '&id,icd10PcsCode,icd10PcsCodeShortDescription,icd10PcsCodeFullDescription,validity,codeStatus'
    }
  },

// this._toString(val) :: Always convert your IDs to strings.You can use the provided this._toString(val) function for this.
// this._cleanObject(item) :: Always clean up your json.You can use the provided this._cleanObject(item) for this, which will clean up prototype & meta properties/functions.
// this._toZeroOne(val) :: IndexedDB doesn't work with boolean queries. You need to convert booleans to 1/0 when inserting it into the Database. You can use the provided this._toZeroOne(val) for this.

  mapTable: computed(function () {
    return {
      // example: (item) => {
      //   return {
      //     id: this._toString(get(item, 'id')),
      //     json: this._cleanObject(item),
      //     isRead: this._toZeroOne(get(item, 'attributes.is-read')),
      //     isSynced: this._toZeroOne(get(item, 'attributes.is-synced'), 1)
      //   };
      'audit-drg-code': (model) => {
        return {
          id: this._toString(get(model, 'id')),
          json: this._cleanObject(model)
        };
      },

      'audit-icd10-code': (model) => {
        return {
          id: this._toString(get(model, 'id')),
          json: this._cleanObject(model)
        };
      },

      'audit-place-of-service': (model) => {
        return {
          id: this._toString(get(model, 'id')),
          json: this._cleanObject(model)
        };
      },

      'audit-revenue-code': (model) => {
        return {
          id: this._toString(get(model, 'id')),
          json: this._cleanObject(model)
        };
      },

      'audit-service-type': (model) => {
        return {
          id: this._toString(get(model, 'id')),
          json: this._cleanObject(model)
        };
      },

      'audit-specialty': (model) => {
        return {
          id: this._toString(get(model, 'id')),
          json: this._cleanObject(model)
        };
      },

      'audit-visit-type': (model) => {
        return {
          id: this._toString(get(model, 'id')),
          json: this._cleanObject(model)
        };
      }

    };
  })
});
