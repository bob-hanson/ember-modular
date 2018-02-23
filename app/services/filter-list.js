import { get } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({

  filterCollection(filterProperties, currentCollection, filterValue) {
    var regExp = new RegExp(filterValue, 'i'),
        filteredSet = [];

    currentCollection.forEach(function(currentItem) {
      filterProperties.forEach(function (currentProperty) {
        if (regExp.test(get(currentItem, currentProperty))) {
          if (filteredSet.includes(currentItem)) { return }
          filteredSet.pushObject(currentItem);
        }
      });
    });
    return filteredSet;
  }

});
