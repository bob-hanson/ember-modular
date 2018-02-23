import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('coder-detail-container', 'Integration | Component | coder detail container', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{coder-detail-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#coder-detail-container}}
      template block text
    {{/coder-detail-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
