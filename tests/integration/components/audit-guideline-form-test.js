import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('audit-guideline-form', 'Integration | Component | audit guideline form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{audit-guideline-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#audit-guideline-form}}
      template block text
    {{/audit-guideline-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
