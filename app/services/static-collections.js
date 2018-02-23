import Service, { inject as service } from '@ember/service';
import { pluralize } from 'ember-inflector';
import { get } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { computed } from '@ember/object';

export default Service.extend({

  http: service(),
  indexedDb: service(),
  store: service(),

  backgroundCheckTypes: computed('', function() {
    return [
      {
          "optionName": "Complete",
          "optionValue": "Complete"
      },
      {
          "optionName": "Incomplete",
          "optionValue": "Incomplete"
      }
    ];
  }),

  employmentTypes: computed('', function() {
    return [
      {
          "optionName": "Full Time",
          "optionValue": "Full Time"
      },
      {
          "optionName": "Part Time",
          "optionValue": "Part Time"
      }
    ];
  }),

  stateArray: computed('', function () {
    return [
      {
          "optionName": "Alabama",
          "optionValue": "AL"
      },
      {
          "optionName": "Alaska",
          "optionValue": "AK"
      },
      {
          "optionName": "Arizona",
          "optionValue": "AZ"
      },
      {
          "optionName": "Arkansas",
          "optionValue": "AR"
      },
      {
          "optionName": "California",
          "optionValue": "CA"
      },
      {
          "optionName": "Colorado",
          "optionValue": "CO"
      },
      {
          "optionName": "Connecticut",
          "optionValue": "CT"
      },
      {
          "optionName": "Delaware",
          "optionValue": "DE"
      },
      {
          "optionName": "District Of Columbia",
          "optionValue": "DC"
      },
      {
          "optionName": "Florida",
          "optionValue": "FL"
      },
      {
          "optionName": "Georgia",
          "optionValue": "GA"
      },
      {
          "optionName": "Hawaii",
          "optionValue": "HI"
      },
      {
          "optionName": "Idaho",
          "optionValue": "ID"
      },
      {
          "optionName": "Illinois",
          "optionValue": "IL"
      },
      {
          "optionName": "Indiana",
          "optionValue": "IN"
      },
      {
          "optionName": "Iowa",
          "optionValue": "IA"
      },
      {
          "optionName": "Kansas",
          "optionValue": "KS"
      },
      {
          "optionName": "Kentucky",
          "optionValue": "KY"
      },
      {
          "optionName": "Louisiana",
          "optionValue": "LA"
      },
      {
          "optionName": "Maine",
          "optionValue": "ME"
      },
      {
          "optionName": "Marshall Islands",
          "optionValue": "MH"
      },
      {
          "optionName": "Maryland",
          "optionValue": "MD"
      },
      {
          "optionName": "Massachusetts",
          "optionValue": "MA"
      },
      {
          "optionName": "Michigan",
          "optionValue": "MI"
      },
      {
          "optionName": "Minnesota",
          "optionValue": "MN"
      },
      {
          "optionName": "Mississippi",
          "optionValue": "MS"
      },
      {
          "optionName": "Missouri",
          "optionValue": "MO"
      },
      {
          "optionName": "Montana",
          "optionValue": "MT"
      },
      {
          "optionName": "Nebraska",
          "optionValue": "NE"
      },
      {
          "optionName": "Nevada",
          "optionValue": "NV"
      },
      {
          "optionName": "New Hampshire",
          "optionValue": "NH"
      },
      {
          "optionName": "New Jersey",
          "optionValue": "NJ"
      },
      {
          "optionName": "New Mexico",
          "optionValue": "NM"
      },
      {
          "optionName": "New York",
          "optionValue": "NY"
      },
      {
          "optionName": "North Carolina",
          "optionValue": "NC"
      },
      {
          "optionName": "North Dakota",
          "optionValue": "ND"
      },
      {
          "optionName": "Ohio",
          "optionValue": "OH"
      },
      {
          "optionName": "Oklahoma",
          "optionValue": "OK"
      },
      {
          "optionName": "Oregon",
          "optionValue": "OR"
      },
      {
          "optionName": "Pennsylvania",
          "optionValue": "PA"
      },
      {
          "optionName": "Rhode Island",
          "optionValue": "RI"
      },
      {
          "optionName": "South Carolina",
          "optionValue": "SC"
      },
      {
          "optionName": "South Dakota",
          "optionValue": "SD"
      },
      {
          "optionName": "Tennessee",
          "optionValue": "TN"
      },
      {
          "optionName": "Texas",
          "optionValue": "TX"
      },
      {
          "optionName": "Utah",
          "optionValue": "UT"
      },
      {
          "optionName": "Vermont",
          "optionValue": "VT"
      },
      {
          "optionName": "Virginia",
          "optionValue": "VA"
      },
      {
          "optionName": "Washington",
          "optionValue": "WA"
      },
      {
          "optionName": "West Virginia",
          "optionValue": "WV"
      },
      {
          "optionName": "Wisconsin",
          "optionValue": "WI"
      },
      {
          "optionName": "Wyoming",
          "optionValue": "WY"
      }
    ];
  }),

  posArray: computed('', function() {
    return [
      {
          "optionName": "Foo",
          "optionValue": "foo"
      },
      {
          "optionName": "Bar",
          "optionValue": "bar"
      }
    ];
  }),

  fetchCommonModels(arrayOfModelNames) {
    arrayOfModelNames.forEach(this.setCacheAndBuildModels.bind(this));
  },

  setCacheAndBuildModels(modelName) {
    let indexedDb = get(this, 'indexedDb');
    indexedDb.findAll(modelName).then(this.handleEmptyPayload.bind(this, modelName));
  },

  handleEmptyPayload(modelName, data) {
    if (isEmpty(data)) {
      this.loadFromServer(modelName);
    } else {
      get(this, 'store').findAll(modelName);
    }
  },

  loadFromServer(modelName) {
    get(this, 'http').getRequest('/common/' + this.setUrlForModel(modelName))
    .then(this.handleStaticCollectionApiResponse.bind(this, modelName));
  },

  handleStaticCollectionApiResponse(modelName, response) {
    let indexedDb = get(this, 'indexedDb');
    get(this, 'store').pushPayload(response);
    indexedDb.add(modelName, response.data);
  },

  setUrlForModel(modelName) {
    return pluralize(modelName.underscore());
  }

});
