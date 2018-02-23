import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('facility-audit-nav', 'Integration | Component | facility audit nav', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{facility-audit-nav}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#facility-audit-nav}}
      template block text
    {{/facility-audit-nav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
