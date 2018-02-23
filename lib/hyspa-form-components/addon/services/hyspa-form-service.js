import Service from '@ember/service';

export default Service.extend({

  assignFromModels() {
    var tmpObject = {};
    for (let model of arguments) {
      Object.assign(tmpObject, model.toJSON());
      tmpObject.id = model.id;
    }
    return tmpObject
  }

});
