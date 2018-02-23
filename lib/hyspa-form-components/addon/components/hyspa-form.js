import BaseComponent from 'hyspa-base-components/components/base-component';
import HyspaFormMixin from 'hyspa-form-components/mixins/hyspa-form-mixin';
import { get, set, setProperties, computed } from '@ember/object';
import { once } from '@ember/runloop';
import { inject as service } from '@ember/service';
import layout from '../templates/components/hyspa-form';

export default BaseComponent.extend(
  HyspaFormMixin, {
  layout,
  classNames: ['hyspa-form'],
  classNameBindings: ['colSpan'],
  utilities: service(),
  renderPartsAsTabs: true,
  hasFormParts: false,
  showTabs: false,
  parentWidth: 80,
  tabsColumnWidth: computed(function() {
    return 2000 / Number(get(this, 'parentWidth'));
  }),
  tabsPanelWidth: computed(function() {
    return 100 - get(this, 'tabsColumnWidth');
  }),

  initComponent() {
    this.setupDefaults();
    once(this, 'setValidStates');
  },

  registerFormPart(formPart) {
    set(formPart, 'parentFormFor', get(this, 'formFor'));
    get(this, 'formParts').pushObject(formPart);
    get(this, 'formParts').arrayContentDidChange();
    if (get(this, 'formParts').length === 1) {
      set(formPart, 'isActive', true);
    }
    once(this, 'setHasFormParts');
    once(this, 'setFormPartsNavigationProperties');
  },

  setHasFormParts() {
    set(this, 'hasFormParts', true);
  },

  setFormPartsNavigationProperties() {
    var formParts = get(this, 'formParts'),
        idx = 0;

    if (formParts.length < 1) return;

    formParts.forEach((formPart) => {
      let previousFormPart = formParts.objectAt(idx - 1);
      let nextFormPart = formParts.objectAt(idx + 1);

      if (nextFormPart) {
        setProperties(formPart, {
          paginationTextNext: get(nextFormPart, 'tabText'),
          navigateToNext: nextFormPart,
          isLastFormPart: false
        });
      } else {
        set(formPart, 'isLastFormPart', true);
      }

      if (previousFormPart) {
        setProperties(formPart, {
          paginationTextPrevious: get(previousFormPart, 'tabText'),
          navigateToPrevious: previousFormPart,
          isFirstFormPart: false
        });
      } else {
        set(formPart, 'isFirstFormPart', true);
      }

      idx++;
    });
  },

  buildAndSubmit() {
    var formData = this.buildFormAndChildrenFormData();
    this.attrs.formSubmitAction(formData);
  },

  buildAndSave() {
    var formData = this.buildFormAndChildrenFormData();
    this.attrs.formSaveAction(formData);
  },

  cancel() {
    if (this.attrs.formCancelAction) {
      this.attrs.formCancelAction();
    }
  },

  buildFormAndChildrenFormData() {
    var formData = this.buildFormData();
    get(this, 'formParts').forEach(this.formPartFormDataIteration.bind(this, formData));
    return formData;
  },

  formPartFormDataIteration(formData, formPart) {
    var formPartFormData = formPart.buildFormData();
    formData = get(this, 'utilities').mergeFormData(formData, formPartFormData);
    // console.log('FORM PART BREAK')
    // this.debugFormData(formPartFormData);
  },

  changeTabSelection(formPart) {
    var formParts = get(this, 'formParts'),
        currentActivePart = formParts.findBy('isActive', true);

    formParts.setEach('isActive', false);
    set(currentActivePart, 'hasNavigatedAway', true);
    set(formPart, 'isActive', true);
  },

  // debugFormData(fd) {
  //   var pair;
  //   for (pair of fd.entries()) {
  //     console.log(pair[0] + ', ' + pair[1]);
  //   }
  // },

  actions: {
    triggerRegisterFormPart(formPart) {
      this.registerFormPart(formPart);
    },

    triggerFormSubmitAction() {
      this.buildAndSubmit();
    },

    triggerFormSaveAction() {
      this.buildAndSave();
    },

    triggerFormCancelAction() {
      this.cancel();
    },

    triggerFormTabClick(formPart) {
      this.changeTabSelection(formPart);
    },

    triggerNavigateFormParts(formPart) {
      this.changeTabSelection(formPart);
    }
  }

});
