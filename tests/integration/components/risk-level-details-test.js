import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('risk-level-details', 'Integration | Component | risk level details', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{risk-level-details}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#risk-level-details}}
      template block text
    {{/risk-level-details}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
