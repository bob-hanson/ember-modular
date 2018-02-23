import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('audit-compentency-scoring', 'Integration | Component | audit compentency scoring', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{audit-compentency-scoring}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#audit-compentency-scoring}}
      template block text
    {{/audit-compentency-scoring}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
