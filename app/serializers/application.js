import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
  keyForAttribute(key) {
    return key;
  },

  keyForRelationship: function(key) {
    return key;
  }
});
