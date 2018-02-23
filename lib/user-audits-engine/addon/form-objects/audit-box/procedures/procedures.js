import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';
import ListedProcedure from './listed-procedure';

export default BaseAuditboxFormObject.extend({
  section: 'procedures',

  dynamicProcedures: null,
  listedProcedures: null,

  setFormProperties() {
    this.set('listedProcedures', []);
    this.buildListedProcedures();
  },

  buildListedProcedures() {
    this.get('dynamicFormContent.procedures.listedProcedures').forEach(this.buildListedProcedure.bind(this));
  },

  buildListedProcedure(listedProcedure) {
    this.get('listedProcedures').pushObject(ListedProcedure.create({ procedureType: listedProcedure.procedureType, sourceQuestions: listedProcedure.procedureQuestions, dynamicObjectId: listedProcedure.dynamicObjectId }));
  },

  clearObject() {
    this.get('listedProcedures').forEach(function(listedProcedure) {
      listedProcedure.clearObject();
    });
    this.setCustomFieldValues(true);
  },

  resetObject() {
    this.get('listedProcedures').forEach(function(listedProcedure) {
      listedProcedure.resetObject();
    });
    this.setCustomFieldValues();
  }

});
