import { get, set } from '@ember/object';
import { alias, equal, not } from '@ember/object/computed';
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
  subdomain: attr('string'),
  tenantId: attr('number'),
  isEnabled: attr('boolean'),
  isDeleted: attr('boolean'),
  isArchived: attr('boolean'),
  auditClientId: attr('number'),
  complianceClientId: attr('number'),
  creationStatus: attr('string'),
  contacts: hasMany('contact'),
  products: hasMany('product'),
  clientProducts: hasMany('client-product'),
  users: hasMany('user'),

  clientSlug: alias('id'),
  databaseCreated: equal('creationStatus', 'success'),
  databasePending: equal('creationStatus', 'pending'),
  databaseFailed: equal('creationStatus', 'failed'),
  databaseNotFailed: not('databaseFailed'),

  isDatabaseDependant: true,

  setStatus(status) {
    set(this, 'creationStatus', status);
  },

  getAllRelationships() {
    return hash({
      contacts: get(this, 'contacts'),
      products: get(this, 'products'),
      clientProducts: get(this, 'clientProducts'),
    });
  }
});
