import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('coder-facilities', 'Integration | Component | coder facilities', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{coder-facilities}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#coder-facilities}}
      template block text
    {{/coder-facilities}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
