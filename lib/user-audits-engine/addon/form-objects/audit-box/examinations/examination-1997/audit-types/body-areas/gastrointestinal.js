import Object, { set } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'Gastrointestinal (Abdomen)',
  componentName: 'exam-elements-gastrointestinal',
  gastrointestinalElementsOfExam: null,

  handleMultiSystem() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of abdomen with notation of presence of masses or tenderness', optionValue: 'abdomen'}),
      Object.create({ optionName: 'Examination of liver and spleen', optionValue: 'liverSpleen'}),
      Object.create({ optionName: 'Examination for presence or absence of hernia', optionValue: 'presenceOfHernia'}),
      Object.create({ optionName: 'Examination (when indicated) of anus, perineum and rectum, including sphinter tone, presence of hemorrhoids, rectal masses', optionValue: 'anusPerineumRectum'}),
      Object.create({ optionName: 'Obtain stool sample for occult blood test when indicated', optionValue: 'stoolSample'})
    ]);
  },

  handleCardiovascular() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of abdomen with notation of presence of masses or tenderness', optionValue: 'abdomen'}),
      Object.create({ optionName: 'Examination of liver and spleen', optionValue: 'liverSpleen'}),
      Object.create({ optionName: 'Obtain stool sample for occult blood test when indicated', optionValue: 'stoolSample'})
    ]);
  },

  handleGenitourinaryM() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of abdomen with notation of presence of masses or tenderness', optionValue: 'abdomen'}),
      Object.create({ optionName: 'Examination for presence or absence of hernia', optionValue: 'presenceOfHernia'}),
      Object.create({ optionName: 'Examination of liver and spleen', optionValue: 'liverSpleen'}),
      Object.create({ optionName: 'Obtain stool sample for occult blood test when indicated', optionValue: 'stoolSample'})
    ]);
  },

  handleGenitourinaryF() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of abdomen with notation of presence of masses or tenderness', optionValue: 'abdomen'}),
      Object.create({ optionName: 'Examination for presence or absence of hernia', optionValue: 'presenceOfHernia'}),
      Object.create({ optionName: 'Examination of liver and spleen', optionValue: 'liverSpleen'}),
      Object.create({ optionName: 'Obtain stool sample for occult blood test when indicated', optionValue: 'stoolSample'})
    ]);
  },

  handleHematologic() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of abdomen with notation of presence of masses or tenderness', optionValue: 'abdomen'}),
      Object.create({ optionName: 'Examination of liver and spleen', optionValue: 'liverSpleen'})
    ]);
  },

  handleRespiratory() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of abdomen with notation of presence of masses or tenderness', optionValue: 'abdomen'}),
      Object.create({ optionName: 'Examination of liver and spleen', optionValue: 'liverSpleen'})
    ]);
  },

  handleSkin() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Examination of abdomen with notation of presence of masses or tenderness', optionValue: 'abdomen'}),
      Object.create({ optionName: 'Examination of liver and spleen', optionValue: 'liverSpleen'})
    ]);
  }

});
