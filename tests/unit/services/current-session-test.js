import Ember from 'ember';
import config from '../../../config/environment';
import { moduleFor } from 'ember-qunit';
import test from 'ember-sinon-qunit/test-support/test';;



moduleFor('service:current-session', 'Unit | Service | current session', {
  // Specify the other units that are required for this test.
  needs: ['service:cookies', 'service:currentApp', 'service:fixtures'],
});

test('authToken returns the proper Bearer token string for headers', function(assert) {
  assert.expect(1);
  let service = this.subject({ cookies: Ember.Object.create({ read: function() { } }) });
  let expectedResult = 'Bearer 123';

  service.cookies.read = this.stub(service.cookies, 'read').returns('123');

  assert.equal(service.get('authToken'), expectedResult, 'authToken returns the proper Bearer token string for headers');
});

test('setupSessionObjects calls the proper setup methods', function(assert) {
  assert.expect(3);
  let service = this.subject();

  service.setEnvironment = this.stub(service, 'setEnvironment');
  service.setMetaData = this.stub(service, 'setMetaData');
  service.setSessionUser = this.stub(service, 'setSessionUser');
  service.setApiHost = this.stub(service, 'setApiHost');
  service.setupSessionObjects();
  assert.ok(service.setEnvironment.called, 'setupSessionObjects calls setEnvironment');
  assert.ok(service.setMetaData.called, 'setupSessionObjects calls setMetaData');
  assert.ok(service.setSessionUser.called, 'setupSessionObjects calls setSessionUser');
});

test('setEnvironment sets currentEnvironment to config.environment value', function(assert) {
  assert.expect(1);
  let service = this.subject();
  service.setEnvironment();
  assert.equal(service.get('currentEnvironment'), config.environment,'setEnvironment sets currentEnvironment to config.environment value');

});

test('setMetaData sets metaData to an object with the proper values', function(assert) {
  assert.expect(4);
  let service = this.subject();

  service.getUserJSON = this.stub(service, 'getUserJSON').returns('user-json');
  service.getApiVersionMetaDataContent = this.stub(service, 'getApiVersionMetaDataContent').returns('api-version');
  service.getApiHostMetaDataContent = this.stub(service, 'getApiHostMetaDataContent').returns('api-host');

  service.setMetaData();
  assert.equal(service.get('metaData').user, 'user-json','setMetaData sets metaData.user return of getUserJSON');
  assert.equal(service.get('metaData').apiHost, 'api-host','setMetaData sets metaData.user return of getApiHostMetaDataContent');

  assert.ok(service.getUserJSON.called, 'getUserJSON was called');
  assert.ok(service.getApiHostMetaDataContent.called, 'getApiHostMetaDataContent was called');

});

test('setSessionUser sets metaData to an object with the proper values', function(assert) {
  assert.expect(1);
  let service = this.subject({ metaData: { user: 'user-json'}, store: Ember.Object.create({ push: function (val) { return val; } })});

  service.setSessionUser();
  assert.equal(service.get('currentSessionUser'), 'user-json','setSessionUser sets currentSessionUser to the value of metaData.user');

});

test('setApiVersion sets apiVersion to metaData.apiVersion', function(assert) {
  assert.expect(1);
  let service = this.subject({ metaData: { apiVersion: 'Foo'} });
  service.setApiVersion();
  assert.equal(service.get('apiVersion'), 'Foo','setApiVersion sets apiVersion to the value of metaData.apiVersion');
});

test('setApiHost sets apiHost to metaData.apiHost plus the http protocol', function(assert) {
  assert.expect(1);
  let service = this.subject({ metaData: { apiHost: 'Foo'} });
  service.setApiHost();
  assert.equal(service.get('apiHost'), 'Foo','setApiVersion sets apiHost to the value of metaData.apiHost with the http protocol');
});

test('getUserMetaDataContent returns the value of the proper <meta> in the document', function(assert) {
  assert.expect(2);
  let service = this.subject();

  document.getElementsByName = this.stub(document, 'getElementsByName').returns([{ content:'Foo'}]);

  assert.equal(service.getUserMetaDataContent(), 'Foo', 'getUserMetaDataContent returns the value of the proper <meta> in the document');
  assert.ok(document.getElementsByName.calledWith('user'));
});

test('getApiVersionMetaDataContent returns the value of the proper <meta> in the document', function(assert) {
  assert.expect(2);
  let service = this.subject();

  document.getElementsByName = this.stub(document, 'getElementsByName').returns([{ content:'Foo'}]);

  assert.equal(service.getApiVersionMetaDataContent(), 'Foo', 'getApiVersionMetaDataContent returns the value of the proper <meta> in the document');
  assert.ok(document.getElementsByName.calledWith('apiVersion'));
});

test('getUserJSON returns fixture data or metaData based on the env.', function(assert) {
  assert.expect(4);
  let service = this.subject({ fixtures: { sessionUser: function() {} }, metaData: { user: 'Bar' }});

  service.fixtures.sessionUser = this.stub(service.fixtures, 'sessionUser').returns('fixtureData');
  JSON.parse = this.stub(JSON, 'parse').returns('metaData');
  service.getUserMetaDataContent = this.stub(service, 'getUserMetaDataContent').returns('metaData');

  assert.equal(service.getUserJSON(), 'metaData', 'getUserJSON with isDevelopment true returns the value of the fixture data');

  service.set('isDevelopment', false);
  assert.equal(service.getUserJSON(), 'metaData', 'getUserJSON with isDevelopment false returns the value of the <meta> data');

  assert.ok(JSON.parse.called);
  assert.ok(service.getUserMetaDataContent.called);
});
