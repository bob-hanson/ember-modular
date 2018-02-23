import BaseComponent from 'hyspa-base-components/components/base-component';
import { get, observer } from '@ember/object';
import { isEmpty } from '@ember/utils';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { ifThenElseWithValues } from 'ember-macaroni';
import layout from '../templates/components/edit-encounter';

import FacilityEncounterFormObject from 'facility-encounters/form-objects/audit-box/facility-encounter-form-object';

export default BaseComponent.extend({
  layout,
  classNames: ['edit-encounter'],
  classNameBindings: ['colSpan'],
  facilityAudit: service(),

  isPeekingProjects: false,
  auditBoxContentWidth: ifThenElseWithValues('isPeekingProjects', 60, 80),
  peekArrow: ifThenElseWithValues('isPeekingProjects', 'arrow_back', 'arrow_forward'),

  patientDataPath: alias('facilityAudit.patientDataPath'),
  documentationElementsPath: alias('facilityAudit.documentationElementsPath'),
  codesPath: alias('facilityAudit.codesPath'),
  editEncounterPath: alias('facilityAudit.editEncounterPath'),
  checklistPath: alias('facilityAudit.checklistPath'),

  initComponent() {
    this.setupFormObject();
  },

  observeModelChange: observer('currentEncounter', function() {
    this.setupFormObject();
  }),

  setupFormObject() {
    if (isEmpty(get(this, 'facilityAudit.auditFormObject'))) {
      get(this, 'facilityAudit').set('auditFormObject', FacilityEncounterFormObject.create({
        sourceModel: get(this, 'currentEncounter')
      }));
    }
  },

  toggleProjectsPeek() {
    this.toggleProperty('isPeekingProjects');
  },

  actions: {
    triggerProjectsPeekToggle() {
      this.toggleProjectsPeek();
    },

    triggerSaveDraft() {

    },

    triggerSaveAndComplete() {

    }
  }

});
