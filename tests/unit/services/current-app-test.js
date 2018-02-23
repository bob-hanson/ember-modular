import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';

moduleFor('service:current-app', 'Unit | Service | current app', {
  // Specify the other units that are required for this test.
  needs: ['service:current-session']
});

// Replace this with your real tests.
test('inLoadedRoute returns bool for currentRoute === previousRoute', function(assert) {
  assert.expect(2);

  let service = this.subject();

  service.set('currentRoute', 'Foo');

  assert.notOk(service.get('inLoadedRoute'), 'returns false when currentRoute !== previousRoute');
  service.set('previousRoute', 'Foo');
  assert.ok(service.get('inLoadedRoute'), 'returns true when currentRoute === previousRoute');
});
