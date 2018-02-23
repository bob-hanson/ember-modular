import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('listed-regions-full', 'Integration | Component | listed regions full', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{listed-regions-full}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#listed-regions-full}}
      template block text
    {{/listed-regions-full}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
