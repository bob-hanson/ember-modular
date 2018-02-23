import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('edit-audit-guideline', 'Integration | Component | edit audit guideline', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{edit-audit-guideline}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#edit-audit-guideline}}
      template block text
    {{/edit-audit-guideline}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
