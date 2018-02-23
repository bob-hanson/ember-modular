import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('audit-info-windows', 'Integration | Component | audit info windows', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{audit-info-windows}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#audit-info-windows}}
      template block text
    {{/audit-info-windows}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
