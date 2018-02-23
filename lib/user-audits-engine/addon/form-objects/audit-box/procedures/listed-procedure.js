import Object from '@ember/object';
import { get, set, setProperties } from '@ember/object';
import BaseAuditboxFormObject from '../base-objects/base-auditbox-form-object';

export default BaseAuditboxFormObject.extend({
  procedureType: null,
  dynamicObjectId: null,
  additionalInfo: null,
  procedureQuestions: null,

  sourceQuestions: null,

  setFormProperties() {
    setProperties(this, {
      procedureQuestions: [],
      savedListedProcedure: get(this, 'jsonPayload.procedures.listedProcedures').findBy('dynamicObjectId', get(this, 'dynamicObjectId'))
    })
    set(this, 'procedureQuestions', []);
    this.buildProcedureQuestions();
  },

  buildProcedureQuestions() {
    get(this, 'sourceQuestions').forEach(this.buildProcedureQuestion.bind(this));
  },

  buildProcedureQuestion(sourceQuestion) {
    get(this, 'procedureQuestions').pushObject(Object.create({
      label: sourceQuestion.question,
      dynamicObjectId: sourceQuestion.dynamicObjectId,
      answer: null,
      answerOptions: this.getAnswerOptions()
    }));
  },

  setFormValues(clear) {
    if (clear) {
      set(this, 'additionalInfo', null);
      this.setAnswerValues(clear)
    } else {
      if (get(this, 'savedListedProcedure')) {
        set(this, 'additionalInfo', get(this, 'savedListedProcedure.additionalInfo'));
        this.setAnswerValues();
      }
    }
  },

  setAnswerValues(clear) {
    get(this, 'procedureQuestions').forEach(this.setAnswerValue.bind(this, clear));
  },

  setAnswerValue(clear, procedureQuestion) {
    if (clear) {
      procedureQuestion.set('answer', null);
    } else {
      let matchedSavedProcedure = get(this, 'savedListedProcedure.procedureQuestions').findBy('dynamicObjectId', procedureQuestion.get('dynamicObjectId'));
      let procedureAnswer = matchedSavedProcedure ? matchedSavedProcedure.procedureAnswer : null;
      procedureQuestion.set('answer', procedureAnswer);
    }
  },

  getAnswerOptions() {
    return [
      Object.create({ optionName: 'Yes', optionValue: true }),
      Object.create({ optionName: 'No', optionValue: false }),
      Object.create({ optionName: 'N/A', optionValue: null })
    ];
  },

});
