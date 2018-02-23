import Object, { get, set, setProperties } from '@ember/object';
import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';

export default BaseAuditboxFormObject.extend({
  code: null,
  mod1: null,
  mod2: null,
  mod3: null,
  unit: null,
  rvu: null,
  map: null,

  dxCodes: null,
  mapOptions: null,
  reportedMapOptions: null,
  sourceCode: null,

  setFormProperties() {
    setProperties(this, {
      map: [],
      mapOptions: [],
      reportedMapOptions: []
    });
  },

  afterSetDefaults() {
    this.buildMapOptions();
  },

  setFormValues(clear) {
    if (clear) {
      setProperties(this, {
        code: null,
        mod1: null,
        mod2: null,
        mod3: null,
        unit: null,
        rvu: null,
        map: []
      });
    } else {
      setProperties(this, {
        code: get(this, 'sourceCode.code'),
        mod1: get(this, 'sourceCode.mod1'),
        mod2: get(this, 'sourceCode.mod2'),
        mod3: get(this, 'sourceCode.mod3'),
        unit: get(this, 'sourceCode.unit'),
        rvu: get(this, 'sourceCode.rvu'),
        map: get(this, 'sourceCode.map')
      });
    }
  },

  buildMapOptions() {
    get(this, 'dxCodes').forEach(this.buildMapOption.bind(this));
  },

  buildMapOption(dxCode) {
    var optionName = '';
    if (dxCode.audited) {
      optionName = 'R: ' + dxCode.reported + ' - A: ' + dxCode.audited;
    } else {
      optionName = 'R: ' + dxCode.reported;
    }
    get(this, 'mapOptions').pushObject(Object.create({ optionName: optionName, optionValue: dxCode.dynamicObjectId }));
    get(this, 'reportedMapOptions').pushObject(Object.create({ optionName: dxCode.reported, optionValue: dxCode.dynamicObjectId }))
  },

  addOrEditDxCodeMapOption(dxCode) {
    this.addOrEditDxCodeMapOptionTypeSpecific(dxCode, 'reportedMapOptions');
    this.addOrEditDxCodeMapOptionTypeSpecific(dxCode, 'mapOptions');
  },

  addOrEditDxCodeMapOptionTypeSpecific(dxCode, mapOptionsCollection) {
    var mapOptions = get(this, mapOptionsCollection),
        existingOption = mapOptions.findBy('optionValue', dxCode.dynamicObjectId);

    if (existingOption) {
      set(existingOption, 'optionName', dxCode.reported);
    } else {
      mapOptions.pushObject(Object.create({ optionName: dxCode.reported, optionValue: dxCode.dynamicObjectId }));
    }
  },

  removeDxCodeMapOption(dynamicObjectId) {
    this.removeDxCodeMapOptionTypeSpecific(dynamicObjectId, 'reportedMapOptions');
    this.removeDxCodeMapOptionTypeSpecific(dynamicObjectId, 'mapOptions');
  },

  removeDxCodeMapOptionTypeSpecific(dynamicObjectId, mapOptionsCollection) {
    var mapOptions = get(this, mapOptionsCollection),
        existingOption = mapOptions.findBy('optionValue', dynamicObjectId);

    mapOptions.removeObject(existingOption);
    get(this, 'map').removeObject(dynamicObjectId);
  }

});
