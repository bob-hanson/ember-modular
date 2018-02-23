import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('listed-checklist-subcategories-full', 'Integration | Component | listed checklist subcategories full', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{listed-checklist-subcategories-full}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#listed-checklist-subcategories-full}}
      template block text
    {{/listed-checklist-subcategories-full}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
