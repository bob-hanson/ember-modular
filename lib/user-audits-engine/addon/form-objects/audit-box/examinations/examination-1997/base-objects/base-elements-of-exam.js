import { get, set } from '@ember/object';
import { alias } from '@ember/object/computed';
import BaseAuditBoxFormObject from '../../../base-objects/base-auditbox-form-object';

export default BaseAuditBoxFormObject.extend({
  elementsCount: null,
  specialty: null,
  isShaded: false,
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
    set(this, 'selectedExamElements', []);
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
    get(this, 'pe97').calculateExam();
  },

  calculateElements() {
    set(this, 'elementsCount', get(this, 'selectedExamElements').length);
  }

});
