import { notEmpty } from '@ember/object/computed';
import BaseAuditBoxFormObject from '../../../base-objects/base-auditbox-form-object';

export default BaseAuditBoxFormObject.extend({
  optionName: null,
  optionValue: null,
  selectedSpecialty: null,
  examElementOptions: null,
  specialtyOptions: null,
  hasSpecialties: notEmpty('specialtyOptions'),
  hasExamElementOptions: notEmpty('examElementOptions')
});
