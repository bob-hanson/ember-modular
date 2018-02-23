import Object, { set } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Neck',
  componentName: 'exam-elements-neck',

  handleMultiSystem() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of neck', subLabel: 'e.g. masses, overall appearance, symmetry, tracheal position, crepitus', optionValue: 'examinationNeck' }),
      Object.create({ optionName: 'Examination of thyroid', subLabel: 'e.g. enlargement, tenderness, mass', optionValue: 'examinationThyroid' })
    ]);
  },

  handleCardiovascular() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of jugular veins', subLabel: 'e.g. distention; a, v, or a', optionValue: 'examinationJugular' }),
      Object.create({ optionName: 'Examination of thyroid', subLabel: 'e.g. enlargement, tenderness, mass', optionValue: 'examinationThyroid' })
    ]);
  },

  handleEnt() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of neck', subLabel: 'e.g. masses, overall appearance, symmetry, tracheal position, crepitus', optionValue: 'examinationNeck' }),
      Object.create({ optionName: 'Examination of thyroid', subLabel: 'e.g. enlargement, tenderness, mass', optionValue: 'examinationThyroid' })
    ]);
  },

  handleGenitourinaryM() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of neck', subLabel: 'e.g. masses, overall appearance, symmetry, tracheal position, crepitus', optionValue: 'examinationNeck' }),
      Object.create({ optionName: 'Examination of thyroid', subLabel: 'e.g. enlargement, tenderness, mass', optionValue: 'examinationThyroid' })
    ]);
  },

  handleGenitourinaryF() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of neck', subLabel: 'e.g. masses, overall appearance, symmetry, tracheal position, crepitus', optionValue: 'examinationNeck' }),
      Object.create({ optionName: 'Examination of thyroid', subLabel: 'e.g. enlargement, tenderness, mass', optionValue: 'examinationThyroid' })
    ]);
  },

  handleHematologic() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of neck', subLabel: 'e.g. masses, overall appearance, symmetry, tracheal position, crepitus', optionValue: 'examinationNeck' }),
      Object.create({ optionName: 'Examination of thyroid', subLabel: 'e.g. enlargement, tenderness, mass', optionValue: 'examinationThyroid' })
    ]);
  },

  handleRespiratory() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of neck', subLabel: 'e.g. masses, overall appearance, symmetry, tracheal position, crepitus', optionValue: 'examinationNeck' }),
      Object.create({ optionName: 'Examination of thyroid', subLabel: 'e.g. enlargement, tenderness, mass', optionValue: 'examinationThyroid' }),
      Object.create({ optionName: 'Examination of jugular veins', subLabel: 'e.g. distention; a, v, or a', optionValue: 'examinationJugular' })
    ]);
  },

  handleSkin() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of thyroid', subLabel: 'e.g. enlargement, tenderness, mass', optionValue: 'examinationThyroid' })
    ]);
  }

});
