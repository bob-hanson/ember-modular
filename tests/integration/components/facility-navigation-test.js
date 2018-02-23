import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('facility-navigation', 'Integration | Component | facility navigation', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{facility-navigation}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#facility-navigation}}
      template block text
    {{/facility-navigation}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
