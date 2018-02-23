import { moduleForModel, test } from 'ember-qunit';
import sinon from 'sinon';

moduleForModel('contact', 'Unit | Model | contact', {
  // Specify the other units that are required for this test.
  needs: ['model:base-model', 'model:organization']
});
// 
// test('contactTypeMap should equal the right object value', sinon.test(function(assert) {
//   assert.expect(1);
//   let model = this.subject();
//   let expectedObject = {
//     "Healthicity Account Manager": "Account Manager",
//     "Healthicity Sales Rep": "Sales Rep",
//     "Technical Contact": "Technical Contact",
//     "Billing Contact": "Billing Contact",
//     "Main Contact": "Main Contact"
//   };
//
//   assert.deepEqual(model.get('contactTypeMap'), expectedObject, 'contactTypeMap equals expected object value');
// }));
//
// test('setDefinitionValue should return a value if it exists or "-" if it does not', sinon.test(function(assert) {
//   assert.expect(2);
//   let expectedName = 'john doe';
//   let model = this.subject({ name: expectedName });
//
//   // Ember.run(() => model.)
//
//   let actualName = model.setDefinitionValue('name');
//   let actualEmail = model.setDefinitionValue('email');
//
//   assert.equal(actualName, expectedName, 'existed value returns');
//   assert.equal(actualEmail, '-', '"-" returns when value does not exist');
// }));
//
// test('definitionListData builds the correct object', sinon.test(function(assert) {
//   assert.expect(1);
//   let model = this.subject( {
//     contactTypeMap: {
//       'foo': 'bar'
//     },
//     contactTypeName: 'foo',
//     name: 'John Doe',
//     phoneNumber: '555-555-5555',
//     email: 'john@doe.com'
//   });
//   let expectedObject = {
//     definitionTitle: 'bar',
//     definitionValues: [
//       { definitionKey: 'Name', definitionValue: 'John Doe' },
//       { definitionKey: 'Phone Number', definitionValue: '555-555-5555' },
//       { definitionKey: 'Email Address', definitionValue: 'john@doe.com' }
//     ]
//   };
//
//   assert.deepEqual(model.get('definitionListData'), expectedObject, 'definitionListData matches expected object value');
// }));
