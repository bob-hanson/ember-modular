import { moduleFor } from 'ember-qunit';
import Ember from 'ember';
import test from 'ember-sinon-qunit/test-support/test';

moduleFor('route:base-route', 'Unit | Route | base route', {
  needs: ['service:current-session', 'service:current-app', 'service:toast-message', 'service:repository', 'service:i18n', 'service:ripple'],
});

test('beforeModel hook should call the setPageTitle, checkFeatureFlags, setPreviousRoute and setCurrentRoute  route method', function(assert) {
  assert.expect(4);
  const route = this.subject();
  const transition = { targetName: 'my-route'};

  route.setPageTitle = this.stub(route, 'setPageTitle');
  route.checkFeatureFlags = this.stub(route, 'checkFeatureFlags');
  route.setPreviousRoute = this.stub(route, 'setPreviousRoute');
  route.setCurrentRoute = this.stub(route, 'setCurrentRoute');
  route.beforeModel(transition);

  assert.ok(route.setPageTitle.calledOnce, 'setPageTitle is called by beforeModel hook');
  assert.ok(route.checkFeatureFlags.calledOnce, 'checkFeatureFlags is called by beforeModel hook');
  assert.ok(route.setPreviousRoute.calledOnce, 'setPreviousRoute is called by beforeModel hook');
  assert.ok(route.setCurrentRoute.calledOnce, 'setCurrentRoute is called by beforeModel hook');
});


test('method - formatRouteName', function(assert) {
  assert.expect(1);
  const route = this.subject();
  const currentApp = Ember.Object.create({ currentRoute: 'some-route' });

  route.set('currentApp', currentApp);

  assert.equal(route.formatRouteName(), 'Some Route');
});

test('method - setPageTitle', function(assert) {
  assert.expect(2);
  const route = this.subject();
  const currentApp = Ember.Object.create({ currentRoute: 'some-route' });

  route.set('pageTitle', "Testing Page Title");
  route.set('currentApp', currentApp);

  route.setPageTitle();

  assert.equal(route.get('currentApp.currentPageTitle'), 'Testing Page Title');

  route.set('pageTitle', null);
  route.setPageTitle();

  assert.equal(route.get('currentApp.currentPageTitle'), 'Some Route');

});

test('method - resetCurrentApp', function(assert) {
  assert.expect(1);
  const route = this.subject();
  const currentApp = Ember.Object.create({ currentTarget: 'some-route' });

  route.set('currentApp', currentApp);
  route.resetCurrentApp('Testing Key');
  assert.equal(route.get('currentApp.currentVertical'), 'Testing Key');
});
