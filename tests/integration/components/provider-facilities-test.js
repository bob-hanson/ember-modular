import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('provider-facilities', 'Integration | Component | provider facilities', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{provider-facilities}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#provider-facilities}}
      template block text
    {{/provider-facilities}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
