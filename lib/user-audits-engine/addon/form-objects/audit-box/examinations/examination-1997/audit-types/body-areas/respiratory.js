import Object, { set } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Respiratory',
  componentName: 'exam-elements-respiratory',

  handleMultiSystem() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Assessment of respiratory effort', subLabel: 'e.g. intercostals retractions, use of accessory muscles, diaphragmatic movement', optionValue: 'respiratoryEffort' }),
      Object.create({ optionName: 'Percussion of chest', subLabel: 'e.g. dullness, flatness, hyperresonance', optionValue: 'chestPercussion' }),
      Object.create({ optionName: 'Palpation of chest', subLabel: 'e.g. tactile fremitus', optionValue: 'chestPalpation' }),
      Object.create({ optionName: 'Auscultation of lungs', subLabel: 'e.g. breath of sounds, adventitious sounds, rubs', optionValue: 'lungsAuscultation' })
    ]);
  },

  handleCardiovascular() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection of chest with notation of symmetry and expansion', optionValue: 'chestSymmetry' }),
      Object.create({ optionName: 'Assessment of respiratory effort', subLabel: 'e.g. intercostals retractions, use of accessory muscles, diaphragmatic movement', optionValue: 'respiratoryEffort' }),
      Object.create({ optionName: 'Percussion of chest', subLabel: 'e.g. dullness, flatness, hyperresonance', optionValue: 'chestPercussion' }),
      Object.create({ optionName: 'Palpation of chest', subLabel: 'e.g. tactile fremitus', optionValue: 'chestPalpation' }),
      Object.create({ optionName: 'Auscultation of lungs', subLabel: 'e.g. breath of sounds, adventitious sounds, rubs', optionValue: 'lungsAuscultation' })
    ]);
  },

  handleEnt() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection of chest, including symmetry, expansion, and assessment of respiratory effort', subLabel: 'e.g. intercostals retractions, use of acessory muscles, diaphragmatic movement', optionValue: 'chestInspection' }),
      Object.create({ optionName: 'Auscultation of lungs', subLabel: 'e.g. breath of sounds, adventitious sounds, rubs', optionValue: 'lungsAuscultation' })
    ]);
  },

  handleGenitourinaryM() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Assessment of respiratory effort', subLabel: 'e.g. intercostals retractions, use of accessory muscles, diaphragmatic movement', optionValue: 'respiratoryEffort' }),
      Object.create({ optionName: 'Auscultation of lungs', subLabel: 'e.g. breath of sounds, adventitious sounds, rubs', optionValue: 'lungsAuscultation' })
    ]);
  },

  handleGenitourinaryF() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Assessment of respiratory effort', subLabel: 'e.g. intercostals retractions, use of accessory muscles, diaphragmatic movement', optionValue: 'respiratoryEffort' }),
      Object.create({ optionName: 'Auscultation of lungs', subLabel: 'e.g. breath of sounds, adventitious sounds, rubs', optionValue: 'lungsAuscultation' })
    ]);
  },

  handleHematologic() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Assessment of respiratory effort', subLabel: 'e.g. intercostals retractions, use of accessory muscles, diaphragmatic movement', optionValue: 'respiratoryEffort' }),
      Object.create({ optionName: 'Auscultation of lungs', subLabel: 'e.g. breath of sounds, adventitious sounds, rubs', optionValue: 'lungsAuscultation' })
    ]);
  },

  handleRespiratory() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection of chest with notation of symmetry and expansion', optionValue: 'chestSymmetry' }),
      Object.create({ optionName: 'Assessment of respiratory effort', subLabel: 'e.g. intercostals retractions, use of accessory muscles, diaphragmatic movement', optionValue: 'respiratoryEffort' }),
      Object.create({ optionName: 'Percussion of chest', subLabel: 'e.g. dullness, flatness, hyperresonance', optionValue: 'chestPercussion' }),
      Object.create({ optionName: 'Palpation of chest', subLabel: 'e.g. tactile fremitus', optionValue: 'chestPalpation' }),
      Object.create({ optionName: 'Auscultation of lungs', subLabel: 'e.g. breath of sounds, adventitious sounds, rubs', optionValue: 'lungsAuscultation' })
    ]);
  },

});
