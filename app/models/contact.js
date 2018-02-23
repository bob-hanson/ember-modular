import { computed, get } from '@ember/object';
import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr, hasMany } = DS;

export default BaseModel.extend({
  name: attr('string'),
  phone: attr('string'),
  email: attr('string'),
  contactType: attr('string'),

  organizations: hasMany(),
  clients: hasMany(),

  contactTypeMap: {
    "account": "Account Manager",
    "sales": "Sales Rep",
    "technical": "Technical Contact",
    "billing": "Billing Contact",
    "main": "Main Contact"
  },

  setDefinitionValue(key) {
    return get(this, key) ? get(this, key) : '-';
  },

  definitionListData: computed("", function() {
    return {
      definitionTitle: get(this, 'contactTypeMap')[get(this, 'contactType')],
      definitionValues: [
        { definitionKey: 'Name', definitionValue: this.setDefinitionValue('name') },
        { definitionKey: 'Phone Number', definitionValue: this.setDefinitionValue('phone') },
        { definitionKey: 'Email Address', definitionValue: this.setDefinitionValue('email') }
      ]
    };
  })
});
