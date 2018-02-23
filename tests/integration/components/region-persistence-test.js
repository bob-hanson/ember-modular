import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('region-persistence', 'Integration | Component | region persistence', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{region-persistence}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#region-persistence}}
      template block text
    {{/region-persistence}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
