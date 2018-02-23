import BaseComponent from 'hyspa-base-components/components/base-component';
import FormPropertiesMixin from 'hyspa-form-components/mixins/form-properties-mixin';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import layout from '../templates/components/audit-guideline-form';

export default BaseComponent.extend(
  FormPropertiesMixin, {
  layout,
  classNames: ['audit-guideline-form'],
  classNameBindings: ['colSpan'],

  dosIdentification: 'patient name field',

  facilityOptions: computed(function() {
    return [
      {
        optionName: 'Inpatient',
        optionValue: 'inpatient'
      },
      {
        optionName: 'Outpatient',
        optionValue: 'outpatient'
      }
    ];
  }),

  frequencyOptions: computed(function() {
    return [
      {
        optionName: 'Monthly',
        optionValue: 'monthly'
      },
      {
        optionName: 'Quarterly',
        optionValue: 'quarterly'
      },
      {
        optionName: 'Bi-Annual',
        optionValue: 'biannual'
      },
      {
        optionName: 'Annual',
        optionValue: 'annual'
      },
      {
        optionName: 'Other',
        optionValue: 'other'
      }
    ];
  }),

  turnAroundTimeOptions: computed(function() {
    return [
      {
        optionName: '1 Week',
        optionValue: '1 week'
      },
      {
        optionName: '2 Weeks',
        optionValue: '2 weeks'
      },
      {
        optionName: '3 Weeks',
        optionValue: '3 weeks'
      },
      {
        optionName: '4 Weeks',
        optionValue: '4 weeks'
      },
      {
        optionName: 'Unspecified',
        optionValue: 'unspecified'
      },
      {
        optionName: 'Urgent',
        optionValue: 'urgent'
      },
      {
        optionName: 'Other',
        optionValue: 'other'
      }
    ];
  }),

  prespectiveOrRetrospectiveOptions: computed(function() {
    return [
      {
        optionName: 'Propsective',
        optionValue: 'prospective'
      },
      {
        optionName: 'Retrospective',
        optionValue: 'retrospective'
      }
    ];
  }),

  methodOfTransferOptions: computed(function() {
    return [
      {
        optionName: 'Web-upload',
        optionValue: 'webupload'
      },
      {
        optionName: 'Paper',
        optionValue: 'paper'
      },
      {
        optionName: 'VPN to Client',
        optionValue: 'vpn to client'
      },
      {
        optionName: 'Other',
        optionValue: 'other'
      }
    ];
  }),

  qaReviewInstructionsOptions: computed(function() {
    return [
      {
        optionName: '100%',
        optionValue: '100%'
      },
      {
        optionName: 'Brief',
        optionValue: 'brief'
      },
      {
        optionName: 'Detailed',
        optionValue: 'detailed'
      },
      {
        optionName: 'Other',
        optionValue: 'other'
      }
    ];
  }),

  dosIdentificationOptions: computed(function() {
    return [
      {
        optionName: "Patient Name Field",
        optionValue: "patient name field"
      },
      {
        optionName: "Patient ID Field",
        optionValue: "patient id field"
      },
      {
        optionName: "Both",
        optionValue: "both"
      }
    ];
  }),

  showFrequencyOther: equal('frequency', 'other'),
  showMethodOfTransferOther: equal('methodOfTransfer', 'other'),
  showQaReviewInstructionsOther: equal('qaReviewInstructions', 'other')

});
