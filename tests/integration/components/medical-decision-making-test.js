import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('medical-decision-making', 'Integration | Component | medical decision making', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{medical-decision-making}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#medical-decision-making}}
      template block text
    {{/medical-decision-making}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
