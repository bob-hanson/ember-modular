import ApplicationAdapter from './application';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';

export default ApplicationAdapter.extend({
  namespace: '/common',

  pathForType: function(type) {
    return pluralize(underscore(type));
  }
});
