import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('medical-decision-making-form', 'Integration | Component | medical decision making form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{medical-decision-making-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#medical-decision-making-form}}
      template block text
    {{/medical-decision-making-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
