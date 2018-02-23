import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('scoring-method-form', 'Integration | Component | scoring method form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{scoring-method-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#scoring-method-form}}
      template block text
    {{/scoring-method-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
