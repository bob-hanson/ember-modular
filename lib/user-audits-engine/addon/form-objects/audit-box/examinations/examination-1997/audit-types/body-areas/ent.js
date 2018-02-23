import Object, { set } from '@ember/object';
import BaseBodyArea from '../../base-objects/base-body-area';

export default BaseBodyArea.extend({
  tabText: 'ENM&T',
  componentName: 'exam-elements-ent',

  handleMultiSystem() {
    set(this, 'examElements', [
      Object.create({ optionName: 'External inspection of ears and nose', subLabel: 'e.g. overall appearance, scars, lesions, masses', optionValue: 'externalEarsNose' }),
      Object.create({ optionName: 'Otoscopic examination of external auditory canals and tympanic membranes', optionValue: 'externalAuditoryCanals' }),
      Object.create({ optionName: 'Assessment of hearing', subLabel: 'e.g. whispered voice, finger rub, tuning fork', optionValue: 'hearingAssessment' }),
      Object.create({ optionName: 'Inspection of nasal mucosa, septum, and turbinates', optionValue: 'nasalMucosa' }),
      Object.create({ optionName: 'Inspection of lips, teeth, and gums', optionValue: 'lipsTeethGums' }),
      Object.create({ optionName: 'Examination of oropharynx: oral mucosa, salivary glands, hard and soft palates, tongue, tonsils, and posterior pharynx', optionValue: 'oropharynx' })
    ]);
  },

  handleCardiovascular() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection of lips, teeth, palate, and gums', optionValue: 'lipsTeeth' }),
      Object.create({ optionName: 'Examination of oral mucosa with notation of presence of pallor or cyanosis', optionValue: 'oralMucosa' })
    ]);
  },

  handleEnt() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Otoscopic examination of external auditory canals and tympanic membranes including pneumo-otoscopy with notation of mobility of membranes', optionValue: 'otoscopicAuditoryCanals' }),
      Object.create({ optionName: 'Assessment of hearing with tuning forks and clinical speech reception thresholds', subLabel: 'e.g. whispered voice, finger rub', optionValue: 'hearingAssessment' }),
      Object.create({ optionName: 'External inspection of ears and nose', subLabel: 'e.g. overall appearance, scars, lesions, and masses', optionValue: 'externalInspectionEarsNose' }),
      Object.create({ optionName: 'External inspection of nasal mucosa, septum, and turbinates', optionValue: 'externalNasalMucosa' }),
      Object.create({ optionName: 'Inspection of lips, teeth, and gums', optionValue: 'lipsTeethGums' }),
      Object.create({ optionName: 'Examination of oropharynx: oral mucosa, hard and soft palates, tongue, tonsils, and posterior pharynx', subLabel: 'e.g. asymmetry, lesions, hydration of muscosal surfaces', optionValue: 'oropharynx' }),
      Object.create({ optionName: 'Inspection of pharyngeal walls and pyriform sinuses', subLabel: 'e.g. pooling of saliva, asymmetry, lesions', optionValue: 'pharyngealWalls' }),
      Object.create({ optionName: 'Examination by mirror of larynx, including the condition of the epiglottis, false vocal cords, true vocal cords, and movility of larynx', subLabel: 'Use of mirror not required in children', optionValue: 'mirrorOfLarynx' }),
      Object.create({ optionName: 'Examination by mirror of nasopharynx, including appearance of the mucusa, adenoids, posterior choanae and eustachian tubes', subLabel: 'Use of mirror not required in children', optionValue: 'mirrorOfNasopharynx' })
    ]);
  },

  handleHematologic() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Otoscopic examination of external auditory canals and tympanic membranes', optionValue: 'externalAuditoryCanals' }),
      Object.create({ optionName: 'Inspection of nasal mucosa, septum, and turbinates', optionValue: 'nasalMucosa' }),
      Object.create({ optionName: 'Inspection of teeth and gums', optionValue: 'teethGums' }),
      Object.create({ optionName: 'Examination of oropharynx', subLabel: 'e.g. oral mucosa, hard and soft palates, tongue, tonsiles, and posterior pharynx', optionValue: 'oropharynx' })
    ]);
  },

  handleRespiratory() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection of nasal mucosa, septum, and turbinates', optionValue: 'nasalMucosa' }),
      Object.create({ optionName: 'Inspection of teeth and gums', optionValue: 'teethGums' }),
      Object.create({ optionName: 'Examination of oropharynx', subLabel: 'e.g. oral mucosa, hard and soft palates, tongue, tonsiles, and posterior pharynx', optionValue: 'oropharynx' })
    ]);
  },

  handleSkin() {
    set(this, 'examElements', [
      Object.create({ optionName: 'Inspection of lips, teeth, and gums', optionValue: 'lipsTeeth' }),
      Object.create({ optionName: 'Examination of oropharynx: oral mucosa, salivary glands, hard and soft palates, tongue, tonsils, and posterior pharynx', optionValue: 'oropharynx' })
    ]);
  }

});
