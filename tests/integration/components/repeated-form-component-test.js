import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('repeated-form-component', 'Integration | Component | repeated form component', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{repeated-form-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#repeated-form-component}}
      template block text
    {{/repeated-form-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
