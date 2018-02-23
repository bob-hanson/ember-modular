import { get } from '@ember/object';
import { alias } from '@ember/object/computed';
import BaseAuditBoxFormObject from '../../../base-objects/base-auditbox-form-object';

export default BaseAuditBoxFormObject.extend({
  tabText: null,
  componentName: null,
  specialty: null,
  elementsCount: null,
  isShaded: false,
  completeBodyArea: false,
  atLeastOne: false,
  examElements: null,
  selectedExamElements: null,
  pe97: alias('currentApp.auditBoxFormObject.examination.pe97'),

  init() {
    this._super(...arguments);
    this.setDefaults();
    this.beforeHandleSpecialty();
    this.handleSpecialty();
  },

  setDefaults() {
    this.set('selectedExamElements', []);
  },

  handleSpecialty() {
    switch(get(this, 'specialty')) {

      case 'multiSystem':
        this.handleMultiSystem();
        break;

      case 'cardiovascular':
        this.handleCardiovascular();
        break;

      case 'ent':
        this.handleEnt();
        break;

      case 'eye':
        this.handleEye();
        break;

      case 'genitourinary-m':
        this.handleGenitourinaryM();
        break;

      case 'genitourinary-f':
        this.handleGenitourinaryF();
        break;

      case 'hematologic':
        this.handleHematologic();
        break;

      case 'musculoskeletal':
        this.handleMusculoskeletal();
        break;

      case 'neurological':
        this.handleNeurological();
        break;

      case 'psychiatric':
        this.handlePsychiatric();
        break;

      case 'respiratory':
        this.handleRespiratory();
        break;

      case 'skin':
        this.handleSkin();
        break;

      default:
        break;
    }
  },

  beforeHandleSpecialty() {
    return this;
  },

  handleMultiSystem() {
    return this;
  },

  handleCardiovascular() {
    return this;
  },

  handleEnt() {
    return this;
  },

  handleEye() {
    return this;
  },

  handleGenitourinaryM() {
    return this;
  },

  handleGenitourinaryF() {
    return this;
  },

  handleHematologic() {
    return this;
  },

  handleMusculoskeletal() {
    return this;
  },

  handleNeurological() {
    return this;
  },

  handlePsychiatric() {
    return this;
  },

  handleRespiratory() {
    return this;
  },

  handleSkin() {
    return this;
  },

  calculate() {
    this.calculateElements();
    this.setCompleteBodyArea();
    this.setAtLeastOne();
    this.calculate97Exam();
  },

  calculateElements() {
    this.set('elementsCount', get(this, 'selectedExamElements').length);
  },

  setCompleteBodyArea() {
    var allExamElements = get(this, 'examElements').length === get(this, 'selectedExamElements').length;
    this.set('completeBodyArea', allExamElements);
  },

  setAtLeastOne() {
    this.set('atLeastOne', get(this, 'selectedExamElements').length > 0);
  },

  calculate97Exam() {

  }

});
