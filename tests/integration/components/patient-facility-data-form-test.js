import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('patient-facility-data-form', 'Integration | Component | patient facility data form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{patient-facility-data-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#patient-facility-data-form}}
      template block text
    {{/patient-facility-data-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
