import Mixin from '@ember/object/mixin';
import { joinWith } from 'ember-macaroni';
import { computed, observer, get, set, setProperties } from '@ember/object';
import { and, not, notEmpty } from '@ember/object/computed';
import { isPresent } from '@ember/utils';
import { inject as service } from '@ember/service';

export default Mixin.create({

  hyspaFormService: service(),

  padding: '0,0,0,0',
  primaryButtonText: "Save",
  editText: 'Edit',
  isEditForm: notEmpty('formModel'),
  editHeaderText: joinWith(' ', 'editText', 'formModel.formHeader'),

  formHeaderText: computed('formModel', function () {
    return isPresent(get(this, 'formModel')) ? get(this, 'editHeaderText') : get(this, 'headerText');
  }),

  observeFormModel: observer('formModel.isFullyLoaded', function () {
    this.buildFormProperties();
    this.resizeView();
  }),

  formPropertiesBound: false,
  formPropertiesNotBound: not('formPropertiesBound'),
  formPropertiesNotBoundAndIsEdit: and('formPropertiesNotBound', 'isEditForm'),
  isLoading: and('isNotLoading', 'formPropertiesNotBoundAndIsEdit'),
  isNotLoading: not('formModel.isFullyLoaded'),

  hasFormProperties: notEmpty('formProperties'),
  noFormProperties: not('hasFormProperties'),
  hasFormPropertiesAndIsEdit: and('hasFormProperties', 'isEditForm'),

  buildFormProperties() {
    if (get(this, 'formModel.isFullyLoaded')) {
      this.setFormProperties();
    }
  },

  bindFormProperties() {
    if (get(this, 'hasFormPropertiesAndIsEdit')) {
      setProperties(this, get(this, 'formProperties'));
      set(this, 'formPropertiesBound', true);
    }
  },

  setFormProperties() {
    set(this, 'formProperties', Object.assign(
      get(this, 'hyspaFormService').assignFromModels(get(this, 'formModel'))
    ));
    this.bindFormProperties();
  },

  actions: {

    triggerFormSubmit(fd) {
      this.attrs.formSubmit(get(this, 'formProperties.id'), fd);
    },

    triggerFormCancel() {
      this.attrs.formCancel();
    }

  }

});
