import { alias } from '@ember/object/computed';
import { hash } from 'rsvp';
import DS from 'ember-data';
import BaseModel from 'hyspa-base-components/models/base-model';

const { attr, hasMany } = DS;

export default BaseModel.extend({
  name: attr('string'),
  city: attr('string'),
  address: attr('string'),
  address2: attr('string'),
  zipCode: attr('string'),
  state: attr('string'),
  isEnabled: attr('boolean'),
  contacts: hasMany('contact'),
  products: hasMany('product'),
  users: hasMany('user'),

  resolvedClients: null,

  organizationSlug: alias('id'),

  isDatabaseDependant: false,

  getAllRelationships() {
    return hash({
      contacts: this.get('contacts'),
      products: this.get('products')
    });
  }

});
