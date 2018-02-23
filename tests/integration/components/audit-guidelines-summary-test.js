import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('audit-guidelines-summary', 'Integration | Component | audit guidelines summary', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{audit-guidelines-summary}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#audit-guidelines-summary}}
      template block text
    {{/audit-guidelines-summary}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
