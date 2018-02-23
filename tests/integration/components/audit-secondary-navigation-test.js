import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('audit-secondary-navigation', 'Integration | Component | audit secondary navigation', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{audit-secondary-navigation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#audit-secondary-navigation}}
      template block text
    {{/audit-secondary-navigation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
