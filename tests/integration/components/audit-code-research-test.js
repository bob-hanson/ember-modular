import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('audit-code-research', 'Integration | Component | audit code research', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{audit-code-research}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#audit-code-research}}
      template block text
    {{/audit-code-research}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
