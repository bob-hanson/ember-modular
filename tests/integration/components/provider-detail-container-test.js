import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('provider-detail-container', 'Integration | Component | provider detail container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{provider-detail-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#provider-detail-container}}
      template block text
    {{/provider-detail-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
