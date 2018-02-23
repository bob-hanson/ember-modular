import { computed, get, set } from '@ember/object';
import { notEmpty } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';
import BaseComponent from 'hyspa-base-components/components/base-component';
import layout from '../templates/components/provider-search';

export default BaseComponent.extend({
  layout,
  store: service(),
  classNames: ['provider-search'],
  classNameBindings: ['colSpan'],

  providersByCategory: null,
  hasProvidersByCategory: notEmpty('providersByCategory'),
  providersBySearch: null,
  hasProviderSearchResults: notEmpty('providersBySearch'),
  providersBySearchGridHeaders: null,

  availableTimeframes: null,
  selectedTimeframe: null,
  availableSpecialties: null,
  selectedSpecialties: null,
  availableGroups: null,
  selectedGroups: null,
  availablePractices: null,
  selectedPractices: null,

  initComponent() {
    this.setDefaults();
    this.resetCollections();
  },

  setDefaults() {
    this.providersByCategory = [];
    this.providersBySearch = [];
    this.providersBySearchGridHeaders = [];
    this.availableTimeframes =[ { optionName: "January 2016 - December 2016", optionValue: "January 2016 - December 2016", isActive: false } ];
    this.availableSpecialties = [ { optionName: "Cardiology", optionValue: "Cardiology", isActive: false } ];
    this.availableGroups = [ { optionName: "Group A", optionValue: "Group A", isActive: false } ];
    this.availablePractices = [ { optionName: "Practice A", optionValue: "Practice A", isActive: false } ];
    this.selectedSpecialties = [];
    this.setupDummyData();
  },

  emptyProvidersByCategoryMessage: computed("", function () {
    return get(this, 'i18n').t('analytics.search.emptyProvidersByCategoryMessage');
  }),

  emptyProvidersBySearchMessage: computed("", function () {
    return get(this, 'i18n').t('analytics.search.emptyProvidersBySearchMessage');
  }),

  updateTimeframe(option) {
    scheduleOnce('afterRender', this, this.setSelectedTimeframe.bind(this, option));
  },

  setSelectedTimeframe(option) {
    set(this, 'selectedTimeframe', option.optionValue );
  },

  addToCollection(collection, option) {
    get(this, collection).pushObject(option);
  },

  removeFromCollection(collection, option) {
    get(this, collection).removeObject(option);
  },

  resetCollections() {
    this.setProperties({
      selectedSpecialties: [],
      selectedGroups: [],
      selectedPractices: []
    });
  },

  runAnalytics() {

  },

  setupDummyData() {
    // { label: 'Last Name', valuePath: 'lastName', width: '150px'}
    set(this, 'providersBySearchGridHeaders', [
      { label: 'Score',     valuePath: 'score',     width: '10%' },
      { label: 'Provider',  valuePath: 'provider',  width: '30%' },
      { label: 'Group',     valuePath: 'group',     width: '10%' },
      { label: 'Location',  valuePath: 'location',  width: '10%' },
      { label: 'Specialty', valuePath: 'specialty', width: '10%' },
      { label: 'Category',  valuePath: 'category',  width: '30%' }
    ]);
    for (let i = 0; i < 2000; i++) {
      get(this, 'providersBySearch').push(
        {
          score: `${i + 1}`,
          provider: `name-${i}`,
          group: `group-${i}`,
          location: `location-${i}`,
          specialty: `specialty-${i}`,
          category: `category-${i}` }
      );
    }
  },

  actions: {

    triggerProviderSearch() {
      // console.log('search providers');
    },

    triggerTabSwitched(event) {
      this.resetCollections(event);
    },

    triggerRunAnalytics() {
      this.runAnalytics();
    },

    triggerTimeframeSelected(selectedTimeframe) {
      this.updateTimeframe(selectedTimeframe);
    },

    triggerAddSpecialty(selectedSpecialty) {
      this.addToCollection('selectedSpecialties', selectedSpecialty);
    },

    triggerRemoveSpecialty(selectedSpecialty) {
      this.removeFromCollection('selectedSpecialties', selectedSpecialty);
    },

    triggerAddGroup(selectedGroup) {
      this.addToCollection('selectedGroups', selectedGroup);
    },

    triggerRemoveGroup(selectedGroup) {
      this.removeFromCollection('selectedGroups', selectedGroup);
    },

    triggerAddPractice(selectedPractice) {
      this.addToCollection('selectedPractices', selectedPractice);
    },

    triggerRemovePractice(selectedPractice) {
      this.removeFromCollection('selectedPractices', selectedPractice);
    }

  }

});
