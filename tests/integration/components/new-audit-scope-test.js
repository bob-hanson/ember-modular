import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-audit-scope', 'Integration | Component | new audit scope', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-audit-scope}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#new-audit-scope}}
      template block text
    {{/new-audit-scope}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
