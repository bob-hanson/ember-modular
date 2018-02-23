import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('scoring-methods', 'Integration | Component | scoring methods', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{scoring-methods}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#scoring-methods}}
      template block text
    {{/scoring-methods}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
