import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sortable-repeated-form-component', 'Integration | Component | sortable repeated form component', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sortable-repeated-form-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sortable-repeated-form-component}}
      template block text
    {{/sortable-repeated-form-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
