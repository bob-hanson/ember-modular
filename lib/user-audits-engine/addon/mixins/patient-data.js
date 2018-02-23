import Object, { computed, set } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  staticCollections: service(),

  posSelectOptions: alias('staticCollections.posArray'),
  payerSelectOptions: computed('', function() {
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
  typeOfServiceOptions: computed('', function() {
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
  typeOfVisitOptions: computed('', function() {
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

  genderOptions: null,
  rvuPosOptions: null,
  posCorrect: null,
  gender: null,
  typeOfVisit: 'bar',

  setupGenderOptions() {
    set(this, 'genderOptions', [
      Object.create({ optionName: 'Male', optionValue: 'male' }),
      Object.create({ optionName: 'Female', optionValue: 'female' })
    ]);
  },

  setupRvuPosOptions() {
    set(this, 'rvuPosOptions', [
      Object.create({ optionName: 'Non-Facility', optionValue: 'nonFacility', isSelected: false }),
      Object.create({ optionName: 'Facility', optionValue: 'facility', isSelected: false})
    ]);
  },

  setupPosCorrectOptions() {
    set(this, 'posCorrectOptions', [
      Object.create({ optionName: 'Yes', optionValue: true, isSelected: false }),
      Object.create({ optionName: 'No', optionValue: false, isSelected: false })
    ]);
  },

  nameIsValid: true,
  cityIsValid: true,
  dobIsValid: true,
  organizationIsValid: true,
  payerIsValid: true,
  dosIsValid: true,
  typeOfServiceIsValid: true,
  typeOfVisitIsValid: true,
  admitDateIsValid: true,
  dischargeDateIsValid: true,
  additionalDataCodeIsValid: true

});
