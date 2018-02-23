import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('provider-analytics', 'Integration | Component | provider analytics', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{provider-analytics}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#provider-analytics}}
      template block text
    {{/provider-analytics}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
