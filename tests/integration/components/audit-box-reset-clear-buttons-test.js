import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('audit-box-reset-clear-buttons', 'Integration | Component | audit box reset clear buttons', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{audit-box-reset-clear-buttons}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#audit-box-reset-clear-buttons}}
      template block text
    {{/audit-box-reset-clear-buttons}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
