import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { typeOf } from '@ember/utils';

export default Service.extend({
  store: service(),

  generateModelInstance(modelType) {
    return this.get('store').createRecord(modelType);
  },

  buildFormModelAttributes(modelInstance) {
    var attributesObject = {};
    modelInstance.eachAttribute(function(name) {
      attributesObject[name] = modelInstance.get(name);
    });
    modelInstance.rollbackAttributes();
    return attributesObject;
  },

  buildFormObject(FormConst, model) {
    var modelInstance;
    if (typeOf(model) === 'string') {
      modelInstance = this.generateModelInstance(model);
      return FormConst.create(this.buildFormModelAttributes(modelInstance));
    } else {
      modelInstance = this.generateModelInstance(model.constructor.modelName);
      return FormConst.create(this.buildFormModelAttributes(modelInstance))
                      .assignModel(model);
    }
  },

  buildFormDataObject(modelInstance, formObject) {
    let fd = new FormData();

    modelInstance.eachAttribute(function(name) {
      fd.append(modelInstance.constructor.modelName + '[' + formObject[name].underscore() + ']', formObject[name]);
    });

    return fd;
  }
});
