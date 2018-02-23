import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleFor('service:filter-list', 'Unit | Service | filter list', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('filterCollection calls filterResults with proper args if filterValue is present otherwise its a pass-through.', function(assert) {
  assert.expect(2);
  let service = this.subject();

  service.filterResults = this.stub(service, 'filterResults').returns('fixtureData');

  service.filterCollection('filterProp', 'currentCollection', 'filterValue');

  assert.ok(service.filterResults.calledWith('filterProp', 'currentCollection', 'filterValue'), 'filterResults is called with proper args');

  assert.equal(service.filterCollection('filterProp', 'currentCollection', false), 'currentCollection', 'filterResults passes second arg through when third arg is false');

});
