import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-component-repeater', 'Integration | Component | form component repeater', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{form-component-repeater}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#form-component-repeater}}
      template block text
    {{/form-component-repeater}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
